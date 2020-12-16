import styled, { css } from 'styled-components/native';

interface InputProps {
  isError?: boolean;
  inputHeader?: boolean;
  isTextArea?: boolean;
}

export const Container = styled.View<InputProps>`
  background: transparent;
  height: 54px;
  padding: 0 8px 0 4px;
  border-radius: 8px;
  margin-top: 12px;
  align-items: center;
  flex-direction: row;

  border-width: 1px;
  border-color: #aaa;

  ${props =>
    props.isTextArea &&
    css`
      height: 100px;
      align-items: flex-start;
    `}

  ${props =>
    props.isError &&
    css`
      border-color: #ff1d1d;
    `}

  ${props =>
    props.inputHeader &&
    css`
      background: #fff;
    `}
`;

export const TextInput = styled.TextInput`
  color: #000;
  padding: 8px;
  flex: 1;
`;
