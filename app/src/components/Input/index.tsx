import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  icon?: string;
  isPassword?: boolean;
  name?: string;
  isError?: boolean;
  inputHeader?: boolean;
  isTextArea?: boolean;
}

const Input: React.FC<InputProps> = ({
  isError,
  isPassword,
  icon,
  inputHeader,
  isTextArea,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Container
      isTextArea={isTextArea}
      isError={isError}
      inputHeader={inputHeader}
    >
      {icon && (
        <Feather
          name={icon}
          size={20}
          color="#b7b7b7"
          style={{ marginLeft: 8 }}
        />
      )}

      <TextInput
        placeholderTextColor="#aaa"
        {...rest}
        secureTextEntry={!!(isPassword && !showPassword)}
        keyboardAppearance="dark"
      />

      {isPassword &&
        (showPassword ? (
          <Feather
            name="eye"
            size={20}
            color="#848484"
            onPress={() => setShowPassword(!showPassword)}
            className="iconEnd"
          />
        ) : (
          <Feather
            name="eye-off"
            size={20}
            color="#848484"
            onPress={() => setShowPassword(!showPassword)}
            className="iconEnd"
          />
        ))}
    </Container>
  );
};

export default Input;
