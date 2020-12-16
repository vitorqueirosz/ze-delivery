import React from 'react';

import { Container, PercentageText, PercentageContainer } from './styles';

interface PercentageProps {
  total: number;
}

const PercentageProgress: React.FC<PercentageProps> = ({ total }) => {
  function handleMinimumValue(valueTotal: number) {
    const value = (valueTotal / 15) * 100;

    const formattedValue = value.toFixed(2).replace(',', '.');

    return formattedValue;
  }

  return (
    <Container>
      <PercentageContainer percentage={handleMinimumValue(total)} />

      <PercentageText>
        Faltam R${' '}
        {Number(15 - total)
          .toFixed(2)
          .replace('.', ',')}{' '}
        para o valor mínimo do pedido
      </PercentageText>
    </Container>
  );
};

export default PercentageProgress;
