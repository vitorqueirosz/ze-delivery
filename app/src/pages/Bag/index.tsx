import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';

import bagImage from '../../assets/bag2.png';
import Button from '../../components/Button';
import { StoreState } from '../../store/createStore';

import {
  Container,
  Content,
  BagImage,
  BagContent,
  AmountBagText,
  AmountBagTotal,
  ButtonContainer,
  KeepShoppingButton,
} from './styles';

interface Products {
  amount: number;
  total: string;
}

const Bag: React.FC<Products> = () => {
  const { products, total } = useSelector((state: StoreState) => state.bag);

  const navigation = useNavigation();

  const amounted = products.reduce((item, product) => item + product.amount, 0);

  return (
    <Container>
      <Content>
        <BagImage source={bagImage} resizeMode="contain" />

        <BagContent>
          <AmountBagText>
            Você possui{' '}
            {amounted > 0 && amounted < 10 ? `0${amounted}` : amounted} produto
            na sacola
          </AmountBagText>

          <AmountBagTotal>Total de R$ {total || 0}</AmountBagTotal>
        </BagContent>

        <ButtonContainer>
          <Button enabled onPress={() => navigation.navigate('FinishBag')}>
            VER SACOLA
          </Button>

          <KeepShoppingButton onPress={() => navigation.navigate('Home')}>
            Continuar comprando
          </KeepShoppingButton>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default Bag;
