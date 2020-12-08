import React from 'react';
import { TextProps } from 'react-native';

//* CUSTOM IMPORTS
import { Container } from './styles';

interface CustomTextProps extends TextProps {
  children: string;
  fontType: 'medium' | 'regular';
}

const Text: React.FC<CustomTextProps> = ({ fontType, children, style }) => {
  return (
    <Container style={style} fontType={fontType}>
      {children}
    </Container>
  );
};

export default Text;
