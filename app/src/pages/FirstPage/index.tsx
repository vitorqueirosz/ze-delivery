import { useNavigation } from '@react-navigation/native';
import React from 'react';

import bannerZe from '../../assets/banner.png';
import Button from '../../components/Button';

import {
  Container,
  Header,
  HeaderImage,
  Content,
  TitleContainer,
  Title,
  SubTitle,
  ButtonContainer,
  ContinuesButton,
  ContinuesButtonText,
} from './styles';

const FirstPage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <HeaderImage source={bannerZe} resizeMode="contain" />
      </Header>

      <Content>
        <TitleContainer>
          <Title>É um prazer ter você por aqui!</Title>
          <SubTitle>Vamos nessa?</SubTitle>
        </TitleContainer>

        <ButtonContainer>
          <Button enabled onPress={() => navigation.navigate('SignUp')}>
            CRIAR UMA CONTA
          </Button>

          <Button isWhite onPress={() => navigation.navigate('SignIn')}>
            ENTRAR NA CONTA
          </Button>

          <ContinuesButton>
            <ContinuesButtonText>Continuar sem cadastro</ContinuesButtonText>
          </ContinuesButton>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default FirstPage;
