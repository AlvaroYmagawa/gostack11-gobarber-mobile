import React, { useCallback, useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

//* HOOKS
import { useAuth } from '../../hooks/auth';

//* ASSETS
import logo from '../../assets/logo.png';

//* CUSTOM IMPORTS
import getValidationErrors from '../../utils/getValidationErrors';
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

interface SignInFormData {
  email: string;
  password: string;
}

const SiginIn: React.FC = () => {
  const navigation = useNavigation();

  const { signIn } = useAuth();

  //* REFS
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  //* FUNCTIONS
  const handleSignIn = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Email inválido')
          .required('Email é obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      signIn(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }

      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, cheque as credenciais',
      );
    }
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

              <Input
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current?.focus()}
              />

              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

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
