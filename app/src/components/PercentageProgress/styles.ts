import styled from 'styled-components/native';

import { Animated } from 'react-native';

interface PercentageProps {
  percentage: string;
}

export const Container = styled.View`
  background: transparent;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 30px;
`;
export const PercentageContainer = styled.View<PercentageProps>`
  background: #6dff96;
  width: ${props => `${props.percentage}%`};
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  height: 30px;
`;

export const AnimatedComponent = styled(
  Animated.createAnimatedComponent(PercentageContainer),
);

export const PercentageText = styled.Text`
  color: #666;
  font-family: Roboto_500Medium;
`;
