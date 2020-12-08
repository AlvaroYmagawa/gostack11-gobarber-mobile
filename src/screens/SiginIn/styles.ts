import styled from 'styled-components/native';

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
  color: #f4ede8;
  margin: 64px 0 24px;
`;
