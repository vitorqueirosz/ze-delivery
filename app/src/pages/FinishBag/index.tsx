import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Feather, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import PercentageProgress from '../../components/PercentageProgress';
import { StoreState } from '../../store/createStore';
import { Product } from '../Product';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  HeaderContainer,
  Content,
  ColdContainer,
  ColdText,
  ProductItem,
  ProductImage,
  ProductImageContainer,
  ProductInfoContainer,
  ProductNameContainer,
  ProductName,
  ProductPrice,
  AddToCartContainer,
  AmountCartText,
  RemoveteToCarContainer,
  AddMoreProductsContainer,
  AddMoreButton,
  AddMoreText,
  BagContainer,
  AdressContainer,
  AdressContent,
  Title,
  StreetTitle,
  CupomContainer,
  TicketTitle,
  InstructionsContainer,
  TopContent,
  InstructionsTitle,
  BottomContent,
  ValuationContainer,
  RightText,
  LeftText,
  ButtonContainer,
  DocumentationContainer,
  DocumentationText,
  FreeText,
} from './styles';
import { addToBag, removeToBag } from '../../store/modules/bag/actions';
import RemoveModal from '../../components/RemoveModal';

const FinishBag: React.FC = () => {
  const { products, total } = useSelector((state: StoreState) => state.bag);

  const [showRemoveModal, setShowRemoveModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    {} as Product,
  );

  const amounted = products.reduce((item, product) => item + product.amount, 0);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { adress } = useSelector((state: StoreState) => state.adress);

  useEffect(() => {
    if (!products.length) {
      navigation.navigate('EmptyBag');
    }
  }, [navigation, products.length]);

  function handleAddOneToBag(newProduct: Product) {
    dispatch(addToBag({ product: { ...newProduct, amount: 1 } }));
  }

  function handleMoveToTrash(product: Product) {
    setShowRemoveModal(prevState => !prevState);
    setSelectedProduct(product);
  }

  const handleRemoveToBag = useCallback(
    (product: Product) => {
      if (showRemoveModal) {
        return dispatch(removeToBag({ product, removeAll: true }));
      }

      dispatch(removeToBag({ product }));
    },
    [dispatch, showRemoveModal],
  );

  return (
    <Container>
      {showRemoveModal && (
        <RemoveModal
          product={selectedProduct}
          setShowRemoveModal={setShowRemoveModal}
          showModal={showRemoveModal}
          handleRemoveToBag={() => handleRemoveToBag(selectedProduct)}
        />
      )}

      {Number(total.replace(',', '.')) < 15 && (
        <PercentageProgress total={Number(total.replace(',', '.'))} />
      )}

      <HeaderContainer>
        <Header>SACOLA</Header>
      </HeaderContainer>

      <Content contentContainerStyle={{ paddingBottom: 24 }}>
        {products.find(product => product.category_name === 'Cervejas') && (
          <ColdContainer>
            <Fontisto name="snowflake-4" size={24} color="#547EE7" />

            <ColdText>Suas bebidas já vão geladinhas!</ColdText>
          </ColdContainer>
        )}

        <BagContainer>
          {products.map(product => (
            <ProductItem key={product._id}>
              <ProductImageContainer>
                <ProductImage
                  source={{ uri: product.image }}
                  resizeMode="contain"
                />
              </ProductImageContainer>

              <ProductInfoContainer>
                <ProductNameContainer>
                  <ProductName numberOfLines={2}>{product.name}</ProductName>
                </ProductNameContainer>

                <ProductPrice>{`R$ ${product.price}`}</ProductPrice>

                <AddToCartContainer>
                  <Feather
                    onPress={
                      product.amount > 1
                        ? () => handleRemoveToBag(product)
                        : () => null
                    }
                    name="minus"
                    size={25}
                    color={product.amount === 1 ? '#999' : '#e1b000'}
                  />

                  <AmountCartText>
                    {product.amount < 10
                      ? `0${product.amount}`
                      : product.amount}
                  </AmountCartText>

                  <Feather
                    onPress={() => handleAddOneToBag(product)}
                    name="plus"
                    size={25}
                    color="#e1b000"
                  />
                </AddToCartContainer>
              </ProductInfoContainer>

              <RemoveteToCarContainer>
                <Feather
                  onPress={() => handleMoveToTrash(product)}
                  name="trash"
                  size={25}
                  color="#b4b4b4"
                />
              </RemoveteToCarContainer>
            </ProductItem>
          ))}

          <AddMoreProductsContainer>
            <AddMoreButton onPress={() => navigation.navigate('Home')}>
              <AddMoreText>Adicionar mais produtos</AddMoreText>
            </AddMoreButton>
          </AddMoreProductsContainer>
        </BagContainer>

        <AdressContainer>
          <Feather name="map-pin" size={22} color="#aaa" />

          <AdressContent>
            <Title>Receber agora em</Title>

            <StreetTitle>
              {adress?.street}, {adress?.number}
            </StreetTitle>
          </AdressContent>

          <Feather name="edit" size={22} color="#aaa" />
        </AdressContainer>

        <CupomContainer>
          <MaterialCommunityIcons
            name="ticket-percent"
            size={24}
            color="#aaa"
          />

          <TicketTitle>Adicionar cupom de desconto</TicketTitle>
        </CupomContainer>

        <InstructionsContainer>
          <TopContent>
            <MaterialCommunityIcons
              name="comment-text-outline"
              size={24}
              color="#aaa"
            />

            <InstructionsTitle>
              Instrucoes para o distribuidor?
            </InstructionsTitle>
          </TopContent>

          <Input
            multiline
            placeholder="Ex: Se possível, entregar tudo em temperatura ambiente. O interfone está quebrado, favor ligar quando chegar."
            isTextArea
            placeholderTextColor="#666"
          />
        </InstructionsContainer>

        <BottomContent>
          <ValuationContainer>
            <LeftText>{amounted} produtos</LeftText>
            <RightText>{`R$ ${total}`}</RightText>
          </ValuationContainer>

          <ValuationContainer>
            <LeftText>Frete</LeftText>
            <FreeText>Grátis</FreeText>
          </ValuationContainer>

          <ValuationContainer>
            <LeftText>Total a pagar</LeftText>
            <RightText>{`R$ ${total}`}</RightText>
          </ValuationContainer>

          <ButtonContainer>
            <Button enabled>SELECIONAR FORMA DE PAGAMENTO</Button>
          </ButtonContainer>

          <DocumentationContainer>
            <DocumentationText>
              Apresente um documento com foto na entrega para comprovar sua
              idade (18+)
            </DocumentationText>
          </DocumentationContainer>
        </BottomContent>
      </Content>
    </Container>
  );
};

export default FinishBag;
