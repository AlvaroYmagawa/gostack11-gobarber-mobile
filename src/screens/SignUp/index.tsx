import React, { useCallback, useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ThemeContext } from 'styled-components';
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
  BackToSignIn,
  BackToSignInText,
  Logo,
} from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const { colors } = React.useContext(ThemeContext);

  //* REFS
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  //* FUNCTIONS
  const handleSubmit = useCallback(data => {
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
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Container>
              <Logo source={logo} />
              <Title fontType="medium">Crie sua conta</Title>

              <Input
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Seu Nome"
                returnKeyType="next"
                onSubmitEditing={() => emailInputRef.current?.focus()}
              />

              <Input
                ref={emailInputRef}
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
                textContentType="newPassword" //* Do not sujjest a passowrd
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Criar
              </Button>
            </Container>
          </Form>
        </ScrollView>

        <BackToSignIn onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color={colors.text} />

          <BackToSignInText fontType="regular">
            Voltar para logon
          </BackToSignInText>
        </BackToSignIn>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
