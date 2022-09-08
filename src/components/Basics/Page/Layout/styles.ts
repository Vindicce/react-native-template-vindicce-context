import styled from 'styled-components/native';
import {KeyboardAvoidingView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {color, BackgroundColorProps, backgroundColor} from 'styled-system';

export const SafeAreaStyled = styled(SafeAreaView)<BackgroundColorProps>`
  ${color};
  ${backgroundColor};
  flex: 1;
`;

export const KeyboardAvoidStyled = styled(KeyboardAvoidingView)`
  flex: 1;
`;
