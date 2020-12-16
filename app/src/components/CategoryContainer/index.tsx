import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Categories } from '../../pages/Home';

import {
  Container,
  CategoryTitle,
  ProductsList,
  ProductItem,
  ProductImageContainer,
  ProductImage,
  ProductName,
  ProductPriceContainer,
  ProductPrice,
  SeeMoreButton,
  SeeMoreContainer,
  SeeMoreText,
  CategoryContainer,
  ProductShimmerItem,
} from './styles';

interface Product {
  _id: string;
  name: string;
  price: string;
}

interface CategoryProps {
  category: Categories;
}

const CategoryItem: React.FC<CategoryProps> = ({ category }) => {
  const navigation = useNavigation();

  function handleNavigateToDetails(item: Product, category_name: string) {
    navigation.navigate('Product', { product: { ...item, category_name } });
  }

  return (
    <Container visible={!!category}>
      <CategoryTitle>{category.name}</CategoryTitle>
      <CategoryContainer>
        <ProductsList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 16 }}
        >
          {category.products
            .map(p => (
              <ProductShimmerItem key={p._id} visible={!!category._id}>
                <ProductItem
                  onPress={() => handleNavigateToDetails(p, category.name)}
                >
                  <ProductImageContainer visible={!!category}>
                    <ProductImage
                      source={{ uri: p.image }}
                      resizeMode="contain"
                    />
                  </ProductImageContainer>

                  <ProductName numberOfLines={2}>{p.name}</ProductName>
                  <ProductPriceContainer>
                    <ProductPrice>
                      {`R$ ${
                        Number.isInteger(Number(p.price))
                          ? `${p.price.replace('.', ',')},00`
                          : p.price.replace('.', ',')
                      }`}
                    </ProductPrice>
                  </ProductPriceContainer>
                </ProductItem>
              </ProductShimmerItem>
            ))
            .slice(0, 5)}
          <SeeMoreButton>
            <SeeMoreContainer>
              <Feather name="arrow-right" size={22} color="#e1b000" />
            </SeeMoreContainer>

            <SeeMoreText>Veja tudo</SeeMoreText>
          </SeeMoreButton>
        </ProductsList>
      </CategoryContainer>
    </Container>
  );
};

export default CategoryItem;
