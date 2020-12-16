import { Feather } from '@expo/vector-icons';
import React from 'react';

import Input from '../Input';
import userIcon from '../../assets/user.png';

import {
  Container,
  TopContent,
  IconContainer,
  UserIconContainer,
  MenuContainer,
  UserIconImage,
  AdressContainer,
  Title,
  StreeText,
  StretContainer,
} from './styles';
import { Adress } from '../../pages/Map';

interface AdressProps {
  adress: Adress;
}

const HeaderSearch: React.FC<AdressProps> = ({ adress }) => {
  console.log(adress);

  return (
    <Container>
      <TopContent>
        <UserIconContainer>
          <IconContainer>
            <UserIconImage source={userIcon} resizeMode="contain" />
          </IconContainer>

          <MenuContainer>
            <Feather name="menu" size={15} color="#222" />
          </MenuContainer>
        </UserIconContainer>

        <AdressContainer>
          <Title>Receber agora em</Title>

          <StretContainer>
            <StreeText>
              {adress.street}, {adress.number}
            </StreeText>
            <Feather name="chevron-down" size={25} color="#fff" />
          </StretContainer>
        </AdressContainer>
      </TopContent>

      <Input
        icon="search"
        inputHeader
        placeholder="Pesquise sua bebida favorita"
      />
    </Container>
  );
};

export default HeaderSearch;
