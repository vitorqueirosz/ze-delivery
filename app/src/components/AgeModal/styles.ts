import styled from 'styled-components/native';
// import { Picker as PickerSelect } from '@react-native-picker/picker';

export const Container = styled.Modal``;

export const Modal = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.View`
  padding: 24px 16px;
  align-items: center;
  width: 100%;
  background: #fff;
  position: absolute;
  bottom: 0;
`;
export const TopContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 32px;
`;
export const Title = styled.Text`
  color: #999;
  font-weight: bold;
`;
// export const Picker = styled(PickerSelect)`
//   height: 54px;
//   width: 160px;
//   justify-content: center;
//   align-items: center;
// `;
// export const PickerItem = styled(PickerSelect.Item)``;
