import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Container = styled.SafeAreaView``;

export const Header = styled.View`
  flex-direction: row;
  background: #fff;
  align-items: center;
  justify-content: space-between;
  padding: 12px 8px;
`;
export const Title = styled.Text`
  color: #b7b7b7;
  font-family: Roboto_500Medium;
`;

export const Map = styled(MapView)``;

export const ConfirmationsContainer = styled.View`
  position: absolute;
  padding: 0 16px;
  bottom: 18%;
  width: 100%;
`;
