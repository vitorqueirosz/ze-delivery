import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonText, AddTextContainer } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children?: string;
  enabled?: boolean;
  isWhite?: boolean;
  isSocial?: boolean;
  isAdd?: boolean;
  addTitle?: string;
  amount?: string;
  isBag?: boolean;
  total?: string;
}

const Button: React.FC<ButtonProps> = ({
  enabled,
  children,
  isWhite,
  isSocial,
  isAdd,
  isBag,
  addTitle,
  amount,
  total,
  ...rest
}) => {
  return (
    <Container
      enabled={enabled}
      isSocial={isSocial}
      {...rest}
      isWhite={isWhite}
      isAdd={isAdd}
    >
      {isSocial && (
        <FontAwesome
          name="facebook"
          size={20}
          color="#fff"
          style={{ marginRight: 12 }}
        />
      )}

      {isAdd && (
        <AddTextContainer>
          <ButtonText enabled={enabled}>{addTitle}</ButtonText>
          <ButtonText enabled={enabled}>
            {`R$ ${Number(amount).toFixed(2)?.replace('.', ',')}`}
          </ButtonText>
        </AddTextContainer>
      )}

      {isBag && (
        <AddTextContainer>
          <ButtonText enabled={enabled}>{addTitle}</ButtonText>
          <ButtonText enabled={enabled}>{`R$ ${total}`}</ButtonText>
        </AddTextContainer>
      )}

      {!isAdd && !isBag && (
        <ButtonText enabled={enabled} isWhite={isWhite} isSocial={isSocial}>
          {children}
        </ButtonText>
      )}
    </Container>
  );
};

export default Button;
