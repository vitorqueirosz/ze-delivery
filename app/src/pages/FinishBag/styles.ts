import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { Platform } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const HeaderContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  margin-bottom: 8px;
`;

export const BagContainer = styled.View`
  border-bottom-width: 10px;
  border-color: #eee;
  padding: 16px 16px 18px 16px;
`;

export const Content = styled.ScrollView`
  background: #fff;
`;

export const ColdContainer = styled.View`
  background: #d4e1ff;
  border-color: #adc5ff;
  border-width: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 12px 16px;
  margin: 0 16px;
  border-radius: 8px;
  margin-bottom: 16px;
`;
export const ColdText = styled.Text`
  font-family: Roboto_500Medium;
  color: #333;
  font-size: 15px;
`;

export const ProductItem = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  background: #fff;
  height: 130px;
  margin-top: 8px;
  elevation: 1;
  border-radius: 8px;
`;

export const ProductImageContainer = styled.View`
  width: 120px;
  align-items: center;
  height: 100px;
`;

export const ProductImage = styled.Image`
  width: 90px;
  height: 100%;
`;
export const ProductInfoContainer = styled.View`
  flex: 1;
`;

export const ProductNameContainer = styled.View`
  height: 35px;
  justify-content: center;
`;

export const ProductName = styled.Text`
  max-width: 150px;
  color: #666;
  font-family: Roboto_500Medium;
`;
export const ProductPrice = styled.Text`
  color: #444;
  font-family: Roboto_700Bold;
  margin: 8px 0;
`;

export const AddToCartContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-width: 1px;
  border-color: #aaa;
  padding: 8px;
  border-radius: 8px;
  width: 165px;
`;
export const AmountCartText = styled.Text`
  font-family: Roboto_700Bold;
  color: #555;
`;

export const RemoveteToCarContainer = styled.View`
  width: 50px;
  align-self: flex-start;
  padding: 8px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const AddMoreProductsContainer = styled.View`
  align-items: center;
  padding: 16px 16px 0 16px;
`;
export const AddMoreButton = styled(BorderlessButton)``;

export const AddMoreText = styled.Text`
  font-family: Roboto_700Bold;
  color: #999;
`;

export const AdressContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-bottom-width: 10px;
  border-color: #eee;
  height: 80px;
`;
export const AdressContent = styled.View`
  flex: 1;
  padding-left: 5%;
`;
export const Title = styled.Text`
  font-family: Roboto_700Bold;
  color: #444;
`;
export const StreetTitle = styled.Text`
  color: #999;
  font-family: Roboto_500Medium;
`;

export const CupomContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-bottom-width: 10px;
  border-color: #eee;
  height: 80px;
`;
export const TicketTitle = styled.Text`
  font-family: Roboto_700Bold;
  color: #999;
  margin-left: 5%;
`;

export const TopContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const InstructionsContainer = styled.View`
  padding: 16px;
  border-bottom-width: 10px;
  border-color: #eee;
`;
export const InstructionsTitle = styled.Text`
  font-family: Roboto_700Bold;
  color: #999;
  margin-left: 5%;
`;

export const BottomContent = styled.View`
  padding: 16px;
`;

export const ValuationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  justify-content: space-between;
`;
export const RightText = styled.Text`
  font-family: Roboto_700Bold;
  color: #444;
`;

export const FreeText = styled.Text`
  color: #38d364;
  font-family: Roboto_700Bold;
`;

export const LeftText = styled.Text`
  font-family: Roboto_700Bold;
  color: #999;
`;

export const ButtonContainer = styled.View`
  margin-top: 16px;
`;

export const DocumentationContainer = styled.View`
  margin-top: 8px;
`;

export const DocumentationText = styled.Text`
  font-family: Roboto_400Regular;
  color: #777;
`;
