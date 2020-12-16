import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import styled, { css } from 'styled-components/native';

interface BrandProps {
  brand?: string;
}

export const Container = styled.FlatList`
  flex: 1;
  background: #fff;
`;

export const HeaderContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const BrandsList = styled.ScrollView`
  margin-top: 8px;
  padding: 0 16px 0 16px;
`;

export const Content = styled.View`
  padding: 0 0;
  flex: 1;
  /* margin-top: -16px; */
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const BeerContainer = styled.View`
  border-bottom-width: 10px;
  border-color: #eee;
  padding-bottom: 16px;
  width: 100%;
  height: 210px;
`;

export const BeerShimmerTitle = styled.View`
  height: 20px;
  width: 140px;
`;

export const BeerTitle = styled.Text`
  color: #999;
  font-family: Roboto_700Bold;
  padding: 16px 0 0 16px;
`;

export const BrandShimmerItem = styled(ShimmerPlaceholder)`
  width: 140px;
  height: 140px;
  border-radius: 8px;
  margin-right: 8px;
`;

export const BrandItem = styled.TouchableOpacity``;

const brandsNameVariants = {
  Brahma: css`
    background: #af1919;
  `,
  Skol: css`
    background: #ffc700;
  `,
  Budweiser: css`
    background: #ff002e;
  `,
  Antarctica: css`
    background: #0c5dbb;
  `,
  Original: css`
    background: #ffc148;
  `,
  Stella: css`
    background: #fff;
  `,
  Corona: css`
    background: #fff;
  `,
  Bohemia: css`
    background: #fff;
  `,
  Colorado: css`
    background: #ffe2c0;
  `,
};

export const LoadingContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 300px;
`;

export const LoadingIndicator = styled.ActivityIndicator``;

export const BrandImageContainer = styled(ShimmerPlaceholder)<BrandProps>`
  width: 140px;
  height: 140px;
  border-radius: 8px;
  margin-right: 8px;
  background: #000;

  ${({ brand }) => brandsNameVariants[brand] || null}
`;

export const BrandImage = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 8px;
  margin-right: 8px;
`;

export const ProductsPerCategory = styled.View``;

export const BeerList = styled.View`
  padding: 0 16px;
`;

export const ProductShimmerItem = styled(ShimmerPlaceholder)`
  width: 49%;
  height: 180px;
  margin-right: 8px;
  margin-top: 8px;
  elevation: 2;
  border-radius: 8px;
`;

export const ProductItem = styled.TouchableOpacity`
  width: 100%;
  height: 180px;
  margin-right: 8px;
  padding: 16px;
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

export const CategoryTitle = styled.Text`
  color: #aaa;
  font-size: 16px;
  font-family: Roboto_500Medium;
  margin: 8px 0px 0 16px;
`;
