/* eslint-disable react/jsx-wrap-multilines */
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import { boolean } from 'yup';
import { Animated, ActivityIndicator, View } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import HeaderSearch from '../../components/HeaderSearch';
import api from '../../services/api';

import { Categories } from '../Home';

import CategoryContainer from '../../components/CategoryContainer';

import {
  Container,
  HeaderContainer,
  Content,
  BrandShimmerItem,
  BrandItem,
  BrandsList,
  BeerContainer,
  LoadingIndicator,
  LoadingContainer,
  BeerTitle,
  BrandImageContainer,
  BrandImage,
  ProductsPerCategory,
  BeerList,
  ProductShimmerItem,
  ProductItem,
  ProductImageContainer,
  ProductImage,
  ProductName,
  ProductPriceContainer,
  ProductPrice,
  CategoryTitle,
} from './styles';
import { Adress } from '../Map';
import { StoreState } from '../../store/createStore';

interface CategoryProps {
  category: Categories;
  isBeer: boolean;
}

interface Brand extends Categories {
  is_prestigious: boolean;
}

const Category: React.FC = () => {
  const routes = useRoute();
  const { isBeer, category } = routes.params as CategoryProps;

  const { adress } = useSelector((state: StoreState) => state.adress);

  const [brands, setBrands] = useState<Brand[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  console.log(isFetching);

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

  const numColumns = 2;

  useEffect(() => {
    if (isBeer) {
      setIsFetching(true);

      api.get('brands/no-prestigious').then(response => {
        if (response.data) {
          setBrands(response.data);
          setIsFetching(false);
        }
      });
    }
  }, [isBeer]);

  const navigation = useNavigation();

  return (
    <Container
      onScroll={event => scrollY.setValue(event.nativeEvent.contentOffset.y)}
      item
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

          <View style={{ paddingTop: 180 }} />
          <Content>
            <HeaderContainer>
              <Header isCategory>Voltar</Header>
            </HeaderContainer>

            {isBeer && !isFetching && (
              <>
                <BeerContainer>
                  <BeerTitle>AS CONSAGRADAS</BeerTitle>

                  <BrandsList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingRight: 24 }}
                  >
                    {brands
                      .filter(brand => brand.is_prestigious !== true)
                      .map(brand => (
                        <BrandItem
                          key={brand._id}
                          onPress={() =>
                            navigation.navigate('Brand', {
                              brand,
                            })
                          }
                        >
                          <BrandImageContainer
                            visible={!isFetching}
                            brand={
                              brand.name === 'Stella Artois'
                                ? 'Stella'
                                : brand.name
                            }
                          >
                            <BrandImage
                              source={{ uri: brand.image }}
                              resizeMode="contain"
                            />
                          </BrandImageContainer>
                        </BrandItem>
                      ))}
                  </BrandsList>
                </BeerContainer>
                <BeerContainer>
                  <BeerTitle>AS PRESTIGIADAS</BeerTitle>

                  <BrandsList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingRight: 24 }}
                  >
                    {brands
                      .filter(brand => brand.is_prestigious === true)
                      .map(brand => (
                        <BrandShimmerItem visible={!isFetching} key={brand._id}>
                          <BrandItem
                            onPress={() =>
                              navigation.navigate('Brand', {
                                brand,
                              })
                            }
                          >
                            <BrandImageContainer
                              visible={!isFetching}
                              brand={
                                brand.name === 'Stella Artois'
                                  ? 'Stella'
                                  : brand.name
                              }
                            >
                              <BrandImage
                                source={{ uri: brand.image }}
                                resizeMode="contain"
                              />
                            </BrandImageContainer>
                          </BrandItem>
                        </BrandShimmerItem>
                      ))}
                  </BrandsList>
                </BeerContainer>
              </>
            )}

            {isFetching && (
              <LoadingContainer>
                <LoadingIndicator size="large" color="#ffc700" />
              </LoadingContainer>
            )}

            {isBeer ? (
              <ProductsPerCategory>
                {brands.map(brand => (
                  <CategoryContainer key={brand._id} category={brand} />
                ))}
              </ProductsPerCategory>
            ) : (
              <ProductsPerCategory>
                <CategoryTitle>{category.name.toUpperCase()}</CategoryTitle>
              </ProductsPerCategory>
            )}
          </Content>
        </>
      }
      contentContainerStyle={{ paddingBottom: 24 }}
      data={category.products}
      keyExtractor={(beer: any) => beer._id}
      renderItem={({ item }: { item: any }) =>
        !isFetching &&
        !isBeer && (
          <ProductShimmerItem key={item._id} visible={!!item._id}>
            <ProductItem
              onPress={() =>
                navigation.navigate('Product', {
                  product: { ...item },
                })
              }
            >
              <ProductImageContainer visible={!!item._id}>
                <ProductImage
                  source={{ uri: item.image }}
                  resizeMode="contain"
                />
              </ProductImageContainer>

              <ProductName numberOfLines={2}>{item.name}</ProductName>
              <ProductPriceContainer>
                <ProductPrice>
                  {`R$ ${
                    Number.isInteger(Number(item.price))
                      ? `${item.price},00`
                      : item.price
                  }`}
                </ProductPrice>
              </ProductPriceContainer>
            </ProductItem>
          </ProductShimmerItem>
        )
      }
      numColumns={numColumns}
    />
  );
};

export default Category;
