import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

//* CUSTOM IMPORTS
import Text from '../../displayData/Text';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: ${props => props.theme.colors.accent};
  border-radius: 10px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled(Text)`
  color: #312e38;
  font-size: 16px;
`;
