import React, { useCallback, useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

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
  const navigation = useNavigation();

  //* REFS
  const formRef = useRef<FormHandles>(null);

  //* FUNCTIONS
  const handleSignIn = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
          }}
          keyboardShouldPersistTaps="handled"
        >
          <Form ref={formRef} onSubmit={handleSignIn}>
            <Container>
              <Logo source={logo} />
              <Title fontType="medium">Faça seu logon</Title>

              <Input name="email" icon="mail" placeholder="E-mail" />

              <Input name="password" icon="lock" placeholder="Senha" />

              <Button onPress={() => formRef.current?.submitForm()}>
                Logar
              </Button>

              <ForgotPassword>
                <ForgotPasswordText fontType="regular">
                  Esqueci minha senha
                </ForgotPasswordText>
              </ForgotPassword>
            </Container>
          </Form>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#ff9000" />

        <CreateAccountButtonText fontType="regular">
          Criar conta
        </CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SiginIn;
