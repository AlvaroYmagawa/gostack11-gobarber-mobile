import React from 'react';
import { KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

//* ASSETS
import logo from '../../assets/logo.png';

//* CUSTOM IMPORTS
import Input from '../../components/inputs/Input';
import Button from '../../components/inputs/Button';
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  Logo,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SiginIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Logo source={logo} />
            <Title fontType="medium">Faça seu logon</Title>

            <Input name="email" icon="mail" placeholder="E-mail" />

            <Input name="password" icon="lock" placeholder="Senha" />

            <Button onPress={() => alert('ok')}>Logar</Button>

            <ForgotPassword>
              <ForgotPasswordText fontType="regular">
                Esqueci minha senha
              </ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton>
        <Icon name="log-in" size={20} color="#ff9000" />

        <CreateAccountButtonText fontType="regular">
          Criar conta
        </CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SiginIn;
