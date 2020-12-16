import styled, { css } from 'styled-components/native';

interface CheckBoxProps {
  isColor?: boolean;
  value?: boolean | string | null;
}

export const Container = styled.TouchableOpacity<CheckBoxProps>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: transparent;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: #999;
  margin-right: 8px;

  ${props =>
    props.value &&
    css`
      background: #ffc700;
      border-width: 0;
    `}
`;
