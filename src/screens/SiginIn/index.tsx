import React from 'react';

//* ASSETS
import { Alert } from 'react-native';
import logo from '../../assets/logo.png';

//* CUSTOM IMPORTS
import Input from '../../components/inputs/Input';
import Button from '../../components/inputs/Button';
import { Container, Title, Logo } from './styles';

const SiginIn: React.FC = () => {
  return (
    <Container>
      <Logo source={logo} />
      <Title fontType="medium">Faça seu logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />

      <Input name="password" icon="lock" placeholder="Senha" />

      <Button onPress={() => alert('ok')}>Logar</Button>
    </Container>
  );
};

export default SiginIn;
