import styled from 'styled-components/native';

import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

import Swipe from 'react-native-swiper';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Container = styled.FlatList`
  flex: 1;
  background: #fff;
`;

export const Content = styled.ScrollView`
  padding: 180px 0 0 0;
  flex: 1;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background: #fff;
`;

export const SwipeContainer = styled.View`
  width: 100%;
  height: 300px;
  align-items: center;
  background: #fff;
  border-bottom-width: 10px;
  border-color: #ddd;
  padding-bottom: 8px;
`;

export const Swiper = styled(Swipe)`
  height: 300px;
  width: 240px;
`;

export const SwipeItem = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`;
export const SwipeImage = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 20px;
`;

export const SwipeDot = styled.View`
  height: 10px;
  width: 10px;
  background: #fff;
  border-radius: 5px;
  margin: 16px 3px 3px 3px;
`;

export const SwipeDotActive = styled.View`
  height: 10px;
  width: 10px;
  background: #c35517;
  border-radius: 5px;
  margin: 16px 3px 3px 3px;
`;

export const CategoryShimmerItem = styled(ShimmerPlaceholder)`
  width: 48%;
  border-width: 1px;
  border-color: #9a9a9a;
  border-radius: 8px;
  height: 50px;
  margin: 4px;
  justify-content: center;
  align-items: flex-start;
  padding-left: 16px;
`;

export const CategoryItem = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;

  align-items: center;
`;
export const CategoryImage = styled.Image`
  height: 25px;
  width: 25px;
  margin-right: 8px;
`;
export const CategoryName = styled.Text`
  color: #444;
  font-family: Roboto_400Regular;
`;

export const ProductsPerCategory = styled.View``;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 16px;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
`;
