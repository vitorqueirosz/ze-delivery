import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import { StoreState } from '../../store/createStore';

import { addToBag } from '../../store/modules/bag/actions';

import {
  Container,
  Content,
  Header,
  ProductImageContainer,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductPrice,
  CartContainer,
  AddToCartContainer,
  AmountCartText,
  AmountPlustContainer,
  AmountInputPlus,
  AmountPlustText,
  AlreadyOnBag,
  AlreadyOnBagText,
} from './styles';

export interface Product {
  _id: string;
  name: string;
  price: string;
  image: string;
  category_name: string;
  amount: number;
}

interface ProductParams {
  product: Product;
  category: string;
}

const Product: React.FC = () => {
  const routes = useRoute();
  const { product } = routes.params as ProductParams;

  const [onBag, setOnBag] = useState<boolean>(false);

  const [amount, setAmount] = useState<number>(1);
  const [amountProduct, setAmountProduct] = useState<number>(1);

  const { products: productsList } = useSelector(
    (state: StoreState) => state.bag,
  );

  useEffect(() => {
    setAmount(1);
    const findProduct = productsList.find(p => p._id === product._id);

    if (findProduct) {
      setOnBag(true);
      setAmountProduct(findProduct.amount);
    }
  }, [productsList, product._id]);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  function handleAddOneToBag(newProduct: Product) {
    setAmount(prevState => prevState + 1);
  }

  function handleAddSixToBag(newProduct: Product) {
    if (amount !== 1) {
      return setAmount(prevState => prevState + 6);
    }

    setAmount(prevState => prevState + 5);
  }

  function handleAddTwelveToBag(newProduct: Product) {
    if (amount !== 1) {
      console.log(amount);
      return setAmount(prevState => prevState + 12);
    }

    setAmount(prevState => prevState + 11);
  }

  function handleAddFifteenToBag(newProduct: Product) {
    if (amount !== 1) {
      return setAmount(prevState => prevState + 15);
    }

    setAmount(prevState => prevState + 14);
  }

  console.log(product);

  function handleAddToBagAndNavigate() {
    navigation.navigate('Bag');

    // if (products.length === 0 && product) {
    //   return dispatch(addToBag({ product: { ...product, amount } }));
    // }

    dispatch(addToBag({ product: { ...product, amount } }));
  }

  return (
    <Container>
      <Header>
        <Feather
          name="arrow-left"
          size={22}
          color="#aaa"
          onPress={() => navigation.goBack()}
        />
      </Header>

      <Content>
        <ProductImageContainer>
          <ProductImage source={{ uri: product.image }} resizeMode="contain" />
        </ProductImageContainer>

        <ProductDetails>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>
            {`R$ ${
              Number.isInteger(Number(product.price))
                ? `${product.price.replace('.', ',')},00`
                : product.price.replace('.', ',')
            }`}
          </ProductPrice>
        </ProductDetails>

        <CartContainer>
          <AddToCartContainer>
            <Feather
              onPress={() =>
                setAmount(prevState =>
                  prevState === 1 ? prevState : prevState - 1,
                )
              }
              name="minus"
              size={25}
              color={amount === 1 ? '#999' : '#e1b000'}
            />

            <AmountCartText>
              {amount < 10 ? `0${amount}` : amount}
            </AmountCartText>

            <Feather
              onPress={() => handleAddOneToBag(product)}
              name="plus"
              size={25}
              color="#e1b000"
            />
          </AddToCartContainer>

          <AmountPlustContainer>
            <AmountInputPlus onPress={() => handleAddSixToBag(product)}>
              <AmountPlustText>+ 6 un.</AmountPlustText>
            </AmountInputPlus>

            <AmountInputPlus onPress={() => handleAddTwelveToBag(product)}>
              <AmountPlustText>+ 12 un.</AmountPlustText>
            </AmountInputPlus>

            <AmountInputPlus onPress={() => handleAddFifteenToBag(product)}>
              <AmountPlustText>+ 15 un.</AmountPlustText>
            </AmountInputPlus>
          </AmountPlustContainer>

          <Button
            onPress={handleAddToBagAndNavigate}
            enabled
            isAdd
            addTitle={`ADICIONAR (${amount})`}
            amount={String(amount * Number(product.price.replace(',', '.')))}
          />

          {onBag && (
            <AlreadyOnBag>
              <AlreadyOnBagText>
                Voce ja tem {amountProduct} produitos desse na sacola
              </AlreadyOnBagText>
            </AlreadyOnBag>
          )}
        </CartContainer>
      </Content>
    </Container>
  );
};

export default Product;
