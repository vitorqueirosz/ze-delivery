import { BorderlessButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

interface TextProps {
  isAside?: boolean;
  isReady?: boolean;
}

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

export const Container = styled.ScrollView`
  background: #fff;
`;

export const Content = styled.View`
  flex: 1;
  background: #fff;
  justify-content: center;
`;
export const TopContainer = styled.View`
  padding-bottom: 24px;
  border-bottom-width: 10px;
  border-color: #ddd;
  background: #fff;
  width: 100%;
`;

export const HeaderContainer = styled.View`
  padding: 0 16px;
`;
export const AskTitle = styled.Text`
  color: #6d5f5f;
  font-weight: bold;
`;
export const AskContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 24px 0 8px 0;
`;

export const Title = styled.Text`
  margin-top: 24px;
  color: #999;
`;
export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;
export const SubTitle = styled.Text`
  color: #999;
`;

export const SignInButton = styled(BorderlessButton)``;

export const SignInTitle = styled.Text`
  margin-left: 4px;
  color: #dd6c03;
  font-weight: bold;
`;

export const FormContainer = styled.View`
  padding: 0 16px;
`;
export const ErrorText = styled.Text`
  color: #ff4040;
  margin: 2px 0;
  font-size: 13px;
`;

export const AlertText = styled.Text`
  font-size: 12px;
  color: #666;
  font-weight: bold;
  margin: 2px 0;
`;

export const TextContainer = styled.View``;

export const TextTopContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CheckBoxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 60px;
`;
export const TermsText = styled.Text``;
export const TermsShortText = styled.Text<TextProps>`
  color: #dd6c03;
  font-weight: bold;

  ${props =>
    props.isAside &&
    css`
      padding: 0 4px;
    `}
`;

export const InputAge = styled.TouchableOpacity`
  background: transparent;
  height: 54px;
  padding: 0 8px 0 4px;
  border-radius: 8px;
  margin-top: 12px;
  align-items: center;
  flex-direction: row;

  border-width: 1px;
  border-color: #aaa;

  /* ${props =>
    props.isError &&
    css`
      border-color: #ff1d1d;
    `} */
`;
export const AgeText = styled.Text<TextProps>`
  color: #000;
  padding: 8px;
  flex: 1;

  ${props =>
    !props.isReady &&
    css`
      color: #aaa;
    `}
`;
