import styled, { css } from 'styled-components/native';

interface ButtonProps {
  enabled?: boolean;
  isWhite?: boolean;
  isSocial?: boolean;
  isAdd?: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 319px;
  height: 44px;
  width: 100%;
  margin-top: 16px;
  border-radius: 26px;
  align-items: center;
  justify-content: center;

  background: #ffc700;

  ${props =>
    props.isAdd &&
    css`
      height: 52px;
    `}

  ${props =>
    props.isSocial &&
    css`
      flex-direction: row;
      align-items: center;
      background: #3b5998;
    `};

  ${props =>
    !props.enabled &&
    css`
      background: #cfcfcf;
    `};

  ${props =>
    props.isWhite &&
    css`
      background: #fff;
      border-width: 1px;
      border-color: #333;
    `};
`;

export const ButtonText = styled.Text<ButtonProps>`
  color: #878787;

  font-family: Roboto_500Medium
    ${props =>
      props.isWhite &&
      css`
        color: #333;
        font-family: Roboto_400Regular;
      `};

  ${props =>
    props.enabled &&
    css`
      color: #333;
      font-family: Roboto_700Bold;
    `};

  ${props =>
    props.isSocial &&
    css`
      font-family: Roboto_700Bold;
      color: #fff;
    `};
`;

export const AddTextContainer = styled.View`
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 0 16px;
`;
