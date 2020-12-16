import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  height: 100%;
`;

export const AdressHeader = styled.View`
  padding: 16px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 10px;
  border-color: #ddd;
`;
export const AdressDetails = styled.View`
  margin-left: 16px;
`;
export const AdressTitle = styled.Text`
  font-family: Roboto_700Bold;
  color: #555;
`;
export const AdressText = styled.Text`
  font-family: Roboto_500Medium;
  color: #9a9a9a;
  padding-right: 8px;
  max-width: 100%;
`;
export const Content = styled.View``;

export const ScheduleContainer = styled.View`
  border-bottom-width: 10px;
  border-color: #ddd;
`;

export const AdressContainer = styled.View``;

export const ButtonContainer = styled.View`
  padding: 0 16px;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 16px;
`;
