import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, View } from 'react-native';

import * as Location from 'expo-location';

import { Marker, PROVIDER_GOOGLE, MapEvent } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import GOOGLE_KEY from '../../config/key';
import pinHome from '../../assets/pin.png';

import Button from '../../components/Button';
import ConfirmationModal from '../../components/ConfirmationModal';
import api from '../../services/api';

import {
  Container,
  Map,
  ConfirmationsContainer,
  Header,
  Title,
} from './styles';

interface GoogleData {
  types: [];
}

export interface Adress {
  street: string;
  state: string;
  number: string;
  city: string;
  neighborhood: string;
}

const MapModal: React.FC = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const [showModal, setShowModal] = useState<boolean>(false);
  const [adressPayload, setAdressPayload] = useState<Adress>({} as Adress);

  const navigation = useNavigation();

  useEffect(() => {
    (async function loadCurrentPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Ooooops....',
          'Precisamos da sua permissao para marcar sua localizacao',
        );
      }

      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;

      setPosition({ latitude, longitude });
    })();

    return () => console.log('SAIU');
  }, []);

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
  }

  async function handleConfirmPosition() {
    const { latitude, longitude } = position;

    const { data } = await api.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_KEY}`,
    );

    if (data) {
      const adressData = {
        street: data.results[1].address_components.find((adress: GoogleData) =>
          adress.types.find((type: string) => type === 'route'),
        ).long_name,
        number: data.results[1].address_components.find((adress: GoogleData) =>
          adress.types.find(type => type === 'street_number'),
        ).long_name,
        city: data.results[1].address_components.find((adress: GoogleData) =>
          adress.types.find(
            (type: string) => type === 'administrative_area_level_2',
          ),
        ).long_name,
        state: data.results[1].address_components.find((adress: GoogleData) =>
          adress.types.find(
            (type: string) => type === 'administrative_area_level_1',
          ),
        ).short_name,
        neighborhood: data.results[1].address_components.find(
          (adress: GoogleData) =>
            adress.types.find((type: string) => type === 'sublocality'),
        ).long_name,
      };

      setAdressPayload(adressData);
      setShowModal(true);
    }
  }

  return (
    <Container>
      {showModal && (
        <ConfirmationModal
          show={showModal}
          setShowModal={setShowModal}
          adress={adressPayload}
        />
      )}
      <Header>
        <Feather
          name="arrow-left"
          size={20}
          color="#b7b7b7"
          onPress={() => navigation.goBack()}
        />
        <Title>INDICAR LOCAL NO MAPA</Title>
        <View />
      </Header>
      <Map
        provider={PROVIDER_GOOGLE}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        initialRegion={{
          latitude: -12.8754964 || position.latitude,
          longitude: -38.3060312 || position.longitude,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        onPress={handleSelectMapPosition}
      >
        <Marker
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          icon={pinHome}
          coordinate={{
            latitude: position.latitude || -12.8754964,
            longitude: position.longitude || -38.3060312,
          }}
        />
      </Map>

      <ConfirmationsContainer style={{ elevation: 1 }}>
        <Button enabled onPress={handleConfirmPosition}>
          CONFIRMAR LOCAL
        </Button>
      </ConfirmationsContainer>
    </Container>
  );
};

export default MapModal;
