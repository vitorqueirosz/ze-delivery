import styled from 'styled-components/native';

import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

export const Container = styled(ShimmerPlaceholder)`
  border-bottom-width: 10px;
  border-color: #ddd;
  padding-bottom: 16px;
`;

export const CategoryTitle = styled.Text`
  color: #aaa;
  font-size: 16px;
  font-family: Roboto_500Medium;
  margin: 8px 0px 0 16px;
`;
export const ProductsList = styled.ScrollView`
  padding: 16px;
  margin-right: 16px;
`;

export const ProductShimmerItem = styled(ShimmerPlaceholder)`
  width: 120px;
  height: 180px;
  margin-right: 8px;
`;

export const ProductItem = styled.TouchableOpacity`
  width: 120px;
  height: 180px;
  margin-right: 8px;
  border-radius: 8px;
  padding: 12px 8px 8px 8px;
  elevation: 1;
`;

export const ProductImageContainer = styled(ShimmerPlaceholder)`
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 84px;
  height: 84px;
`;
export const ProductName = styled.Text`
  color: #666;
  font-family: Roboto_400Regular;
  margin-top: 8px;
  font-size: 13px;
`;

export const ProductPriceContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const ProductPrice = styled.Text`
  color: #333;
  font-family: Roboto_500Medium;
`;

export const CategoryContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SeeMoreContainer = styled.View`
  elevation: 1;
  border-radius: 25px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;
export const SeeMoreButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
export const SeeMoreText = styled.Text`
  color: #444;
  font-family: Roboto_400Regular;
  margin-top: 4px;
`;

export const ListContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;
