import styled from 'styled-components/native';

export const Container = styled.Text`
  font-family: ${props => {
    switch (props.fontType) {
      case 'medium':
        return 'Ubuntu-Medium';

      case 'regular':
        return 'Ubuntu-Regular';

      default:
        return 'Ubuntu-Regular';
    }
  }};
`;
