import React from 'react';

import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

import emtyBagImage from '../../assets/emptyBag.png';

import {
  Container,
  HeaderContainer,
  Content,
  EmptyBagContainer,
  EmptyBagImage,
  ButtonContainer,
  EmptyNameContainer,
  EmptyTitle,
  EmptySubTitle,
} from './styles';
import Button from '../../components/Button';

const EmptyBag: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <HeaderContainer>
        <Header isEmptyBag>SACOLA</Header>
      </HeaderContainer>

      <Content>
        <EmptyBagContainer>
          <EmptyBagImage source={emtyBagImage} />
        </EmptyBagContainer>

        <EmptyNameContainer>
          <EmptyTitle>Putz, está vazia!</EmptyTitle>
          <EmptySubTitle>
            Voce nao possui nenhum produto na sua sacola
          </EmptySubTitle>
        </EmptyNameContainer>

        <ButtonContainer>
          <Button enabled onPress={() => navigation.navigate('Home')}>
            CONTINUAR COMPRANDO
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default EmptyBag;
