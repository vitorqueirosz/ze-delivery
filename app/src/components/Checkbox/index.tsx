import { Feather } from '@expo/vector-icons';

import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container } from './styles';

interface CheckBox extends TouchableOpacityProps {
  value: boolean | string | null;
}

const CheckBox: React.FC<CheckBox> = ({ value, ...rest }) => {
  return (
    <Container {...rest} value={value}>
      {value && <Feather name="check" size={14} color="#fff" />}
    </Container>
  );
};

export default CheckBox;
