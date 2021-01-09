import { AxiosResponse } from 'axios';

//* CUSTOM IMPORTS
import api from '../../services/api';
import IUser from '../../interfaces/IUser';

interface SignInFormData {
  email: string;
  password: string;
}

export const signIn = async (
  data: SignInFormData,
): Promise<AxiosResponse<{ token: string; user: IUser }>> =>
  Promise.resolve(api.post('/sessions', { ...data }));
