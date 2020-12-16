import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';

import { useDispatch } from 'react-redux';
import Header from '../../components/Header';
import { Adress } from '../Map';

import Button from '../../components/Button';
import InfoCard from '../../components/InfoCard';

import {
  Container,
  AdressHeader,
  AdressDetails,
  AdressContainer,
  AdressTitle,
  AdressText,
  Content,
  ScheduleContainer,
  ButtonContainer,
} from './styles';
import api from '../../services/api';
import { adressRequest } from '../../store/modules/adress/actions';

interface AdressParams {
  adress: Adress;
}

const Details: React.FC = () => {
  const route = useRoute();
  const { adress } = route.params as AdressParams;

  const dispatch = useDispatch();
  const navigation = useNavigation();

  async function handleUpdateUserAdress() {
    try {
      await api.post('/users/adress', {
        street: adress.street,
        number: adress.number,
        neighborhood: adress.neighborhood,
        city: adress.city,
        state: adress.state,
      });

      dispatch(adressRequest());

      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Header>DETALHES DO PEDIDO</Header>

      <AdressHeader>
        <Feather name="map-pin" size={20} color="#b7b7b7" />

        <AdressDetails>
          <AdressTitle>Endereco</AdressTitle>
          <AdressText>
            {`${adress.street}, ${adress.number} - ${adress.neighborhood}, ${adress.city} - ${adress.state}`}
          </AdressText>
        </AdressDetails>
      </AdressHeader>

      <Content>
        <ScheduleContainer>
          <InfoCard title="Pedir agora" icon="clock" isDone />

          <InfoCard title="Agendar pedido" icon="check-square" />
        </ScheduleContainer>

        <AdressContainer>
          <InfoCard
            title="Receber em casa é mais seguro"
            icon="map-pin"
            isDone
          />

          <InfoCard title="Não saia para retirar seu pedido" icon="car-alt" />
        </AdressContainer>
      </Content>

      <ButtonContainer>
        <Button enabled onPress={handleUpdateUserAdress}>
          VER PRODUTOS DISPONIVEIS
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Details;
