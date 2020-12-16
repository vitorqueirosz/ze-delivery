import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
  background: #121210;
  padding: ${getStatusBarHeight()}px 16px 32px 16px;
  height: 180px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;
export const TopContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;
export const IconContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #e1b000;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const UserIconContainer = styled.View``;

export const MenuContainer = styled.View`
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 12.5px;
  position: absolute;
  right: -15%;
  bottom: -10%;
`;
export const UserIconImage = styled.Image`
  width: 40px;
  height: 30px;
`;
export const AdressContainer = styled.View`
  margin-left: 24px;
  flex: 1;
`;
export const Title = styled.Text`
  color: #fff;
  font-family: Roboto_500Medium;
`;
export const StreeText = styled.Text`
  color: #e1b000;
  font-family: Roboto_500Medium;
`;
export const StretContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
