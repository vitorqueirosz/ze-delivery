import styled from 'styled-components/native';

export const Container = styled.Modal``;

export const Modal = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.View`
  padding: 16px 16px 24px 16px;
  align-items: center;
  width: 100%;
  background: #fff;
  position: absolute;
  bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  justify-content: center;
`;
export const TopContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;
export const Title = styled.Text`
  color: #999;
  font-weight: bold;
`;

export const RemoveTitle = styled.Text`
  color: #aaa;
  font-family: Roboto_500Medium;
`;

export const ProductName = styled.Text`
  color: #888;
  font-family: Roboto_700Bold;
  margin: 12px 0;
`;
