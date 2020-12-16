import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  background: #ffc700;
  padding: 8px 0;
`;
export const HeaderImage = styled.Image`
  height: 100px;
  width: 100%;
`;

export const Content = styled.View`
  justify-content: center;
  flex: 1;
`;
export const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: Roboto_500Medium;
`;
export const SubTitle = styled.Text`
  font-size: 16px;
  color: #333;
  font-family: Roboto_400Regular;
`;
export const ButtonContainer = styled.View`
  padding: 0 16px;
  align-items: center;
  margin-top: 48px;
`;

export const ContinuesButton = styled(BorderlessButton)``;
export const ContinuesButtonText = styled.Text`
  margin-top: 16px;
  color: #dd6c03;
  font-family: Roboto_700Bold;
`;
