import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 25% 0 16px 0;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const BagImage = styled.Image`
  width: 200px;
  height: 200px;
`;
export const BagContent = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;
export const AmountBagText = styled.Text`
  color: #787878;
  font-family: Roboto_700Bold;
`;

export const AmountBagTotal = styled.Text`
  margin-top: 4px;
  color: #aaa;
  font-family: Roboto_700Bold;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 16px;
  justify-content: flex-end;
  align-items: center;
`;
export const KeepShoppingButton = styled.Text`
  color: #dd6c03;
  font-family: Roboto_700Bold;
  margin-top: 16px;
`;
