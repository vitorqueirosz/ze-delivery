import { Feather } from '@expo/vector-icons';
import React, { ReactText, useState } from 'react';

import RNPickerSelect from 'react-native-picker-select';

import { View, TouchableWithoutFeedback } from 'react-native';

import Button from '../Button';

import { Container, Content, TopContent, Title, Modal } from './styles';

interface ModalProps {
  show: boolean;
  setShowModal(value: React.SetStateAction<boolean>): void;
  age: ReactText;
  setAge(value: React.SetStateAction<ReactText>): void;
  setIsReady(value: React.SetStateAction<boolean>): void;
}
const AgeModal: React.FC<ModalProps> = ({
  show,
  setShowModal,
  age,
  setAge,
  setIsReady,
}) => {
  const agesArray = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 18; i < 100; i++) {
    const ages = { label: `${i} anos`, value: i };

    agesArray.push(ages);
  }

  return (
    <Container transparent visible={show} animationType="slide">
      <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
        <Modal>
          <Content>
            <TopContent>
              <View />
              <Title>Qual a sua idade?</Title>

              <Feather
                name="x"
                size={25}
                color="#999"
                onPress={() => setShowModal(false)}
              />
            </TopContent>

            <RNPickerSelect
              placeholder={{
                label: 'Idade',
              }}
              onValueChange={(value: ReactText) => setAge(value)}
              items={agesArray.map(age => ({
                label: age.label,
                value: age.value,
              }))}
            />
            <Button
              enabled
              onPress={() => {
                setShowModal(false);
                setIsReady(true);
              }}
            >
              Confirmar Idade
            </Button>
          </Content>
        </Modal>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default AgeModal;
