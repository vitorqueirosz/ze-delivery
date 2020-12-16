import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import HeaderSearch from '../../components/HeaderSearch';
import api from '../../services/api';
import { StoreState } from '../../store/createStore';

import { Categories } from '../Home';

import {
  Container,
  HeaderContainer,
  Content,
  BrandBanner,
  BeerList,
  ProductShimmerItem,
  ProductItem,
  ProductImageContainer,
  ProductImage,
  ProductName,
  ProductPriceContainer,
  ProductPrice,
} from './styles';

interface BrandProps {
  brand: Brand;
}

interface Brand extends Categories {
  is_prestigious: boolean;
}

const Brand: React.FC = () => {
  const routes = useRoute();
  const { brand } = routes.params as BrandProps;

  const { adress } = useSelector((state: StoreState) => state.adress);

  const navigation = useNavigation();
  const numColumns = 2;

  return (
    <Container
      ListHeaderComponent={(
        <>
          <HeaderSearch adress={adress} />

          <Content contentContainerStyle={{ paddingBottom: 64 }}>
            <HeaderContainer>
              <Header isBrand isCategory>
                Voltar
              </Header>
            </HeaderContainer>

            <BrandBanner
              brand={brand.name === 'Stella Artois' ? 'Stella' : brand.name}
              source={{ uri: brand.image }}
              resizeMode="contain"
            />
          </Content>
        </>
      )}
      contentContainerStyle={{ paddingBottom: 24 }}
      data={brand.products}
      keyExtractor={(beer: any) => beer._id}
      renderItem={({ item }: { item: any }) => (
        <ProductShimmerItem key={brand._id} visible={!!brand._id}>
          <ProductItem
            onPress={() =>
              navigation.navigate('Product', {
                product: { ...item, category_name: 'Cervejas' },
              })
            }
          >
            <ProductImageContainer visible={!!brand._id}>
              <ProductImage source={{ uri: item.image }} resizeMode="contain" />
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
      )}
      numColumns={numColumns}
    />
  );
};

export default Brand;
