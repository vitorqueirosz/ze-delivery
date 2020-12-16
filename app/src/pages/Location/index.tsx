import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import Input from '../../components/Input';

import {
  Container,
  Header,
  Title,
  Content,
  LocationContainer,
  ButtonSearchLocation,
  ButtonTitle,
} from './styles';

const LocationModal: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Content>
          <Header>
            <Title>Onde voce quer suas bebidas?</Title>

            <Input icon="map-pin" placeholder="Inserir endereço com número" />
          </Header>

          <LocationContainer>
            <ButtonSearchLocation
              onPress={() => {
                navigation.navigate('Map');
              }}
            >
              <MaterialCommunityIcons name="target" size={28} color="#b7b7b7" />

              <ButtonTitle>Usar minha localização</ButtonTitle>
            </ButtonSearchLocation>
          </LocationContainer>
        </Content>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default LocationModal;
