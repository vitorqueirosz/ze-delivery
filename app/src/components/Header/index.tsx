import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { Container, HeaderTitle } from './styles';

interface HeaderProps {
  isCategory?: boolean;
  isEmptyBag?: boolean;
  isBrand?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  children,
  isCategory,
  isEmptyBag,
  isBrand,
}) => {
  const navigation = useNavigation();

  return (
    <Container isCategory={isCategory} isBrand={isBrand}>
      <Feather
        name="arrow-left"
        size={25}
        color="#666"
        onPress={
          isEmptyBag
            ? () => navigation.navigate('Home')
            : () => navigation.goBack()
        }
      />

      <HeaderTitle isCategory={isCategory}>{children}</HeaderTitle>

      {!isCategory && <View style={{ width: '10%' }} />}
    </Container>
  );
};

export default Header;
