import styled from 'styled-components/native';
import { metrics } from '../../styles';
import { Animated } from 'react-native';
import ICON from '@expo/vector-icons/build/AntDesign';

const BG = styled(Animated.View)`
  height: ${metrics.height}px;
  width: ${metrics.width}px;
  z-index: 5;
  position: absolute;
`;
const Container = styled(Animated.View)`
  height: ${metrics.height}px;
  width: ${metrics.width}px;
  z-index: 10;
  position: absolute;
`;
const Icon = styled(ICON).attrs({
  name: 'close',
  size: 30,
  color: 'red',
})``;
const Close = styled.TouchableOpacity`
  padding-top: 64px;
  background: orange;
  align-items: flex-end;
`;
export { Container, BG, Icon, Close };
