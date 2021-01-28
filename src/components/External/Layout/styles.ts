import styled from 'styled-components/native';
import { Platform } from 'react-native';

export default {
  KeyboardAvoidingView: styled.KeyboardAvoidingView.attrs({
    behavior: Platform.OS === 'ios' ? 'padding' : undefined,
    enabled: true,
  })`
    flex: 1;
  `,
  Container: styled.ScrollView.attrs({
    contentContainerStyle: {
      flex: 1,
    },
  })`
    flex: 1;
  `,
};
