import styled, { css } from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

interface HeaderProps {
  isCategory?: boolean;
  isBrand?: boolean;
}

export const Container = styled.View<HeaderProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 16px 16px;

  ${props =>
    props.isBrand &&
    css`
      padding-top: ${getStatusBarHeight() + 4}px;
    `}

  ${props =>
    props.isCategory &&
    css`
      justify-content: flex-start;
    `}
`;

export const HeaderTitle = styled.Text<HeaderProps>`
  color: #999;
  font-size: 16px;
  font-family: Roboto_700Bold;

  ${props =>
    props.isCategory &&
    css`
      margin-left: 16px;
    `}
`;
