import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

//* APIs
import api from '../services/api';
import { signIn as apiSignIn } from '../apis/sessions';
import IUser from '../interfaces/IUser';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: IUser;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): Promise<void>;
  isLoading: boolean;
}

interface AuthState {
  token: string;
  user: IUser;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const INITIAL_STATE = {} as AuthState;

const AuthProvider: React.FC = ({ children }) => {
  //* STATES
  const [data, setData] = useState<AuthState>(INITIAL_STATE);
  const [isLoading, setIsLoading] = React.useState(true);

  //* FUNCTIONS
  useEffect(() => {
    const loadStorageData = async () => {
      const [token, user] = await AsyncStorage.multiGet([
        '@GoBarber:token',
        '@GoBarber:user',
      ]);

      const tokenValue = token[1];
      const userValue = JSON.parse(String(user[1]));

      if (tokenValue && userValue)
        setData({ token: tokenValue, user: userValue });

      setIsLoading(false);
    };

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    await apiSignIn({ email, password }).then(async response => {
      const { token, user } = response.data;

      await AsyncStorage.multiSet([
        ['@GoBarber:token', token],
        ['@GoBarber:user', JSON.stringify(user)],
      ]);

      setData({ token, user });
    });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@GoBarber:token', '@GoBarber:user']);

    setData(INITIAL_STATE);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within AuthProvider');

  return context;
};

export { AuthProvider, useAuth };
