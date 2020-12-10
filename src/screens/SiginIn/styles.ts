import styled from 'styled-components/native';

//* *Function to deal with iphone X bottom   */
import { getBottomSpace } from 'react-native-iphone-x-helper';

//* CUSTOM IMPORTS
import Text from '../../components/displayData/Text';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Logo = styled.Image``;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.theme.colors.text};
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled(Text)`
  color: ${props => props.theme.colors.text};
  font-size: 16px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  margin-top: 16px;
  width: 100%;
  border-top-width: 2px;
  border-color: ${props => props.theme.colors.primary};
  padding: 16px 0 ${16 + getBottomSpace()}px;
  background: ${props => props.theme.colors.background};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CreateAccountButtonText = styled(Text)`
  color: ${props => props.theme.colors.accent};

  text-align: center;
  margin-left: 16px;
`;
