/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import Swiper from 'react-native-swiper';

import { useSelector } from 'react-redux';

import { Animated } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import CategoryContainer from '../../components/CategoryContainer';

import swipe1 from '../../assets/zeSwipe.jpg';
import swipe2 from '../../assets/zeSwipe2.jpg';
import swipe3 from '../../assets/zeSwipe3.jpg';

import api from '../../services/api';

import {
  Wrapper,
  Container,
  Content,
  SwipeContainer,
  SwipeItem,
  SwipeImage,
  SwipeDot,
  SwipeDotActive,
  CategoryItem,
  CategoryImage,
  CategoryName,
  ProductsPerCategory,
  ButtonContainer,
  CategoryShimmerItem,
} from './styles';
import Button from '../../components/Button';
import { StoreState } from '../../store/createStore';
import HeaderSearch from '../../components/HeaderSearch';
import { Adress } from '../Map';

export interface Categories {
  _id: string;
  name: string;
  image: string;
  products: Array<{
    _id: string;
    name: string;
    image: string;
    price: string;
  }>;
}

const Home: React.FC = () => {
  const [categories, setCategories] = useState<Categories[]>([]);

  const { products, total } = useSelector((state: StoreState) => state.bag);

  const { adress } = useSelector((state: StoreState) => state.adress);

  const scrollY = new Animated.Value(0);

  const diffClamp = Animated.diffClamp(scrollY, 0, 180);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 180],
    outputRange: [0, -180],
    extrapolate: 'clamp',
  });

  const opacity = diffClamp.interpolate({
    inputRange: [0, 100, 180],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp',
  });

  const navigation = useNavigation();
  const numColumns = 2;

  useEffect(() => {
    navigation.navigate('Location');
  }, [navigation]);

  useEffect(() => {
    api.get('categories/all').then(response => {
      if (response.data) {
        setCategories(response.data);
      }
    });
  }, []);

  // const handleScroll = (event: any) => {
  //   // if (scrollY.__getValue() > 0) {
  //   //   setScrollToTop(true);
  //   // }

  //   return scrollY.setValue(event);
  // };

  return (
    <Container
      onScroll={event => scrollY.setValue(event.nativeEvent.contentOffset.y)}
      ListHeaderComponent={
        <>
          <Animated.View
            style={{
              backgroundColor: '#eee',
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: 180,
              elevation: 1000,
              zIndex: 1000,
              transform: [{ translateY }],
              opacity,
            }}
          >
            <HeaderSearch adress={adress} />
          </Animated.View>

          <Content contentContainerStyle={{ paddingBottom: 16 }}>
            <SwipeContainer>
              <Swiper
                dot={<SwipeDot />}
                activeDot={<SwipeDotActive />}
                autoplay
              >
                <SwipeItem>
                  <SwipeImage source={swipe1} resizeMode="contain" />
                </SwipeItem>

                <SwipeItem>
                  <SwipeImage source={swipe2} />
                </SwipeItem>

                <SwipeItem>
                  <SwipeImage source={swipe3} />
                </SwipeItem>
              </Swiper>
            </SwipeContainer>
            {/* {products.length !== 0 && (
              <ButtonContainer>
                <Button
                  enabled
                  isBag
                  addTitle={`VER SACOLA (${products.length})`}
                  total={total}
                  onPress={() => navigation.navigate('FinishBag')}
                />
              </ButtonContainer>
            )} */}
          </Content>
        </>
      }
      contentContainerStyle={{ justifyContent: 'space-between' }}
      data={categories}
      keyExtractor={(allCategories: any) => allCategories._id}
      renderItem={({ item }: { item: any }) => (
        <CategoryShimmerItem visible={!!categories.length}>
          <CategoryItem
            onPress={() =>
              navigation.navigate('Category', {
                category: item,
                isBeer: item.name === 'Cervejas',
              })
            }
          >
            <CategoryImage source={{ uri: item.image }} resizeMode="contain" />
            <CategoryName>{item.name}</CategoryName>
          </CategoryItem>
        </CategoryShimmerItem>
      )}
      numColumns={numColumns}
      ListFooterComponent={
        <ProductsPerCategory>
          {categories.map(product => (
            <CategoryContainer key={product._id} category={product} />
          ))}
        </ProductsPerCategory>
      }
    />
  );
};

export default Home;
