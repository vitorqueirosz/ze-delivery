import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '../Checkbox';
import Button from '../Button';
import Input from '../Input';

import { Adress } from '../../pages/Map';

import {
  Container,
  Modal,
  Content,
  Title,
  Header,
  TextContainer,
  TopTitle,
  SubTitle,
  Form,
  InputContainer,
  SeparatorContainer,
  CheckBoxContainer,
  CheckBoxTitle,
  LocalContainer,
  CityTitle,
  AlterText,
  BottomContainer,
} from './styles';

interface ConfirmationModal {
  show: boolean;
  setShowModal(value: React.SetStateAction<boolean>): void;
  adress: Adress;
}

const ConfirmationModal: React.FC<ConfirmationModal> = ({
  show,
  setShowModal,
  adress,
}) => {
  const navigation = useNavigation();

  const [dropModal, setDropModal] = useState<boolean>(false);

  const handleNavigateToDetails = () => {
    setShowModal(false);
    navigation.navigate('Details', { adress });
  };

  return (
    <Container transparent animationType="slide" visible={show}>
      <Modal>
        <Content>
          <Header>
            <View style={{ width: 40 }} />
            <Title>Conferir endereço</Title>

            <Feather
              name="x"
              size={25}
              color="#b7b7b7"
              onPress={() => setShowModal(false)}
            />
          </Header>

          <TextContainer>
            <TopTitle>Esse é o endereço do local indicado no mapa.</TopTitle>
            <SubTitle>Você pode editar o texto, se necessário.</SubTitle>
          </TextContainer>

          <Form>
            <Input placeholder="Endereço" value={adress.street} />

            <InputContainer>
              <SeparatorContainer short>
                <Input placeholder="Número" value={adress.number} />

                <CheckBoxContainer>
                  <CheckBox />
                  <CheckBoxTitle>Sem numero</CheckBoxTitle>
                </CheckBoxContainer>
              </SeparatorContainer>

              <SeparatorContainer>
                <Input placeholder="Complemento" />

                <CheckBoxContainer>
                  <CheckBox />
                  <CheckBoxTitle>Nao tenho complemento</CheckBoxTitle>
                </CheckBoxContainer>
              </SeparatorContainer>
            </InputContainer>

            <Input placeholder="Bairro" value={adress.neighborhood} />
          </Form>

          <LocalContainer>
            <CityTitle>
              {adress.city}, {adress.state}
            </CityTitle>
          </LocalContainer>

          <Button onPress={handleNavigateToDetails} enabled>
            CONTINUAR
          </Button>

          <BottomContainer>
            <AlterText>Alterar local no mapa</AlterText>
          </BottomContainer>
        </Content>
      </Modal>
    </Container>
  );
};

export default ConfirmationModal;
