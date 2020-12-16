import styled, { css } from 'styled-components/native';

interface ContainerProps {
  short?: boolean;
  bottom?: boolean;
}

export const Container = styled.Modal``;

export const Content = styled.View`
  background: #f0f0f5;
  flex: 1;
  padding: 12px 16px 0 16px;
  margin-top: 35%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Modal = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.5);
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.Text`
  color: #999;
  font-family: Roboto_500Medium;
`;
export const TextContainer = styled.View`
  margin: 32px 0 24px 0;
`;
export const TopTitle = styled.Text`
  color: #444;
  font-family: Roboto_400Regular;
`;
export const SubTitle = styled.Text`
  color: #333;
  font-family: Roboto_400Regular;
`;

export const Form = styled.View``;
export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const SeparatorContainer = styled.View<ContainerProps>`
  flex: 1;

  ${props =>
    props.short &&
    css`
      width: 120px;
      flex: none;
      margin-right: 16px;
    `}
`;
export const CheckBoxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 6px 0;
`;
export const CheckBoxTitle = styled.Text`
  font-size: 12px;
  color: #828282;
  font-family: Roboto_400Regular;
`;

export const LocalContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 16px 0;
`;
export const CityTitle = styled.Text`
  color: #333;
  font-family: Roboto_400Regular;
`;

export const AlterText = styled.Text`
  font-family: Roboto_700Bold;
  color: #dd6c03;
`;

export const BottomContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 32px;
`;
