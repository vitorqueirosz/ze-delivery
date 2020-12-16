import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background: #fff;
  padding: ${getStatusBarHeight()}px 16px 16px 16px;
`;

export const Content = styled.View`
  flex: 1;
`;
export const ProductImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45%;
  background: #fff;
  border-bottom-width: 0.5px;
  border-bottom-color: #aaa;
`;
export const ProductImage = styled.Image`
  width: 150px;
  height: 200px;
`;
export const ProductDetails = styled.View`
  padding: 16px;
`;

export const ProductName = styled.Text`
  font-size: 16px;
  color: #444;
  font-family: Roboto_400Regular;
`;
export const ProductPrice = styled.Text`
  font-size: 26px;
  color: #444;
  font-family: Roboto_500Medium;
`;

export const CartContainer = styled.View`
  padding: 0 16px;
`;
export const AddToCartContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-width: 1px;
  border-color: #aaa;
  padding: 8px;
  border-radius: 8px;
`;

export const AmountCartText = styled.Text`
  font-family: Roboto_700Bold;
  color: #444;
`;

export const AmountPlustContainer = styled.View`
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const AmountInputPlus = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #aaa;
  padding: 8px;
  border-radius: 8px;
  width: 30%;
  justify-content: center;
  align-items: center;
`;
export const AmountPlustText = styled.Text`
  font-family: Roboto_700Bold;
  color: #444;
`;

export const AlreadyOnBag = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;
export const AlreadyOnBagText = styled.Text`
  color: #666;
`;
