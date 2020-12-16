import styled, { css } from 'styled-components/native';

interface CardProps {
  isDone?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px 16px;
  width: 100%;
  border-bottom-width: 0.5px;
  border-bottom-color: #ccc;
`;
export const Title = styled.Text<CardProps>`
  margin-left: 16px;
  font-family: Roboto_700Bold;
  color: #999;
  ${props =>
    props.isDone &&
    css`
      color: #555;
    `};
`;
export const CheckContainer = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  align-self: flex-end;
`;
export const CheckIcon = styled.Image``;
