import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useCallback,
  useContext,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';
import { ThemeContext } from 'styled-components';

//* CUSTOM IMPORTS
import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, ...rest },
  ref,
) => {
  const { colors } = useContext(ThemeContext);

  const inputElementRef = useRef<any>(null);

  const { registerField, fieldName, defaultValue, error } = useField(name);

  //* REFS
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  //* STATES
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  //* FUNCTIONS
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  const renderIconColor = () => {
    if (isFocused || isFilled) return colors.accent;

    if (error) return '#c53030';

    return colors.opaqueText;
  };

  return (
    <Container isFocused={isFocused} isErrored={!!error}>
      <Icon name={icon} size={20} color={renderIconColor()} />

      <TextInput
        ref={inputElementRef}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        keyboardAppearance="dark"
        placeholderTextColor={colors.opaqueText}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);
