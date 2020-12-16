import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { Product } from '../../pages/Product';

import Button from '../Button';

import {
  Container,
  Modal,
  Content,
  Title,
  TopContent,
  RemoveTitle,
  ProductName,
} from './styles';

interface ModalProps {
  showModal: boolean;
  setShowRemoveModal(value: React.SetStateAction<boolean>): void;
  product: Product;
  handleRemoveToBag(product: Product): void;
}

const RemoveModal: React.FC<ModalProps> = ({
  showModal,
  setShowRemoveModal,
  product,
  handleRemoveToBag,
}) => {
  return (
    <Container transparent animationType="slide" visible={showModal}>
      <Modal>
        <Content>
          <TopContent>
            <View style={{ width: '10%' }} />
            <Title>Sacola</Title>

            <Feather
              name="x"
              size={25}
              color="#999"
              onPress={() => setShowRemoveModal(false)}
            />
          </TopContent>

          <RemoveTitle>Voce deseja remover este produto?</RemoveTitle>

          <ProductName>{product.name}</ProductName>

          <Button
            enabled
            onPress={() => {
              handleRemoveToBag(product);
              setShowRemoveModal(false);
            }}
          >
            REMOVER PRODUTO
          </Button>
        </Content>
      </Modal>
    </Container>
  );
};

export default RemoveModal;
