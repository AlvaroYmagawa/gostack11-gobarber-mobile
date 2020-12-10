import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

//* ROUTES
import Routes from './routes';

//* THEMES
import { useTheme, ThemeProvider as CustomThemeProvider } from './hooks/theme';

const App: React.FC = () => {
  const AppWrapper: React.FC = () => {
    const { theme } = useTheme();

    return (
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.background}
        />

        <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
          <Routes />
        </View>
      </ThemeProvider>
    );
  };

  return (
    <NavigationContainer>
      <CustomThemeProvider>
        <AppWrapper />
      </CustomThemeProvider>
    </NavigationContainer>
  );
};

export default App;
