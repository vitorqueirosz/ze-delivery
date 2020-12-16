import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 24px;
`;
export const Title = styled.Text`
  font-family: Roboto_700Bold;
  color: #404248;
`;
export const Content = styled.View`
  padding: 24px 16px 0 16px;
`;
export const LocationContainer = styled.View`
  margin-top: 24px;
`;
export const ButtonSearchLocation = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
export const ButtonTitle = styled.Text`
  margin-left: 16px;
  font-family: Roboto_700Bold;
  color: #efad02;
`;
