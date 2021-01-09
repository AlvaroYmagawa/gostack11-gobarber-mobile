import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

//* ROUTES
import Routes from './routes';

//* HOOKS
import AppProvider from './hooks';
import { useTheme } from './hooks/theme';

const ThemeContainer: React.FC = ({ children }) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />

      <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
        {children}
      </View>
    </ThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppProvider>
        <ThemeContainer>
          <Routes />
        </ThemeContainer>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
