import { Feather, FontAwesome5 } from '@expo/vector-icons';
import React from 'react';

import checkIcon from '../../assets/checkIcon.png';

import { Container, Title, CheckContainer, CheckIcon } from './styles';

interface CardProps {
  icon: string;
  isDone?: boolean;
  title: string;
}

const InfoCard: React.FC<CardProps> = ({ icon, isDone, title }) => {
  return (
    <Container>
      {icon === 'car-alt' ? (
        <FontAwesome5 name={icon} size={25} color="#b7b7b7" />
      ) : (
        <Feather name={icon} size={25} color="#b7b7b7" />
      )}

      <Title isDone={isDone}>{title}</Title>

      {isDone && (
        <CheckContainer>
          <CheckIcon source={checkIcon} resizeMode="contain" />
        </CheckContainer>
      )}
    </Container>
  );
};

export default InfoCard;
