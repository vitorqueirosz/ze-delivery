import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  background: #ffc700;
`;
export const HeaderImage = styled.Image`
  height: 120px;
  width: 100%;
`;

export const TopContent = styled.View`
  padding: 0px 16px 20px 16px;
  border-bottom-width: 0.5px;
  border-color: #aaa;
`;

export const Content = styled.View`
  padding: 32px 16px 0 16px;
`;

export const ErrorText = styled.Text`
  color: #ff4040;
  margin: 2px 0;
  font-size: 13px;
`;

export const ForgotPasswordContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 24px 0 8px 0;
`;
export const ForgotPasswordText = styled.Text`
  color: #dd6c03;
  font-weight: bold;
`;
