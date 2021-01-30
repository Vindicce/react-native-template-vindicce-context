import React, { useState, useEffect, Fragment } from 'react';
import { Metrics } from '../../styles';
import { useModal } from '../../hooks';
import { IInsets } from '../../utils/interfaces';
import { Animated, Keyboard, BackHandler, Easing } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import IModal from './data';

export const Modal: React.FC<IModal> = ({
  children,
  duration,
  color,
  topRadiusScale,
}) => {
  const { toClose, removeModal } = useModal();
  const [animationValue] = useState(duration || 400);
  const [bgOpacity] = useState(new Animated.Value(0));
  const [bgTop] = useState(new Animated.Value(Metrics.height));
  const [containerTop] = useState(new Animated.Value(Metrics.height));

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true;
      }
    );
    moveTop();
    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    toClose && closeCurrentModal();
  }, [toClose]);

  function closeCurrentModal() {
    moveBottom();
  }

  function moveTop() {
    Keyboard.dismiss();
    Animated.sequence([
      Animated.parallel([
        Animated.timing(bgTop, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }),
        Animated.timing(bgOpacity, {
          toValue: 1,
          duration: 0,
          useNativeDriver: false,
        }),
        Animated.timing(containerTop, {
          toValue: 0,
          duration: animationValue,
          easing: Easing.in(Easing.quad),
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  }

  function moveBottom() {
    Keyboard.dismiss();
    Animated.sequence([
      Animated.parallel([
        Animated.timing(containerTop, {
          toValue: Metrics.height,
          duration: animationValue,
          useNativeDriver: false,
        }),
      ]),
      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }),
    ]).start(() => removeModal());
  }

  const insets: IInsets =
    initialWindowMetrics != null
      ? {
          top: initialWindowMetrics.insets.top,
          bottom: initialWindowMetrics.insets.bottom,
        }
      : ({} as IInsets);

  const verticalValue = insets.top > insets.bottom ? insets.top : insets.bottom;

  const Background = styled(Animated.View)`
    z-index: 5;
    position: absolute;
    width: ${Metrics.width}px;
    height: ${Metrics.height}px;
    background-color: 'rgba(0, 0, 0, 0.4)';
  `;

  const ModalContainer = styled(Animated.View)`
    z-index: 10;
    position: absolute;
    width: ${Metrics.width}px;
    height: ${Metrics.height}px;
  `;

  const ModalContent = styled.View`
    flex: 1;
    justify-content: flex-end;
  `;

  const Space = styled.View<{ color: string }>`
    width: 100%;
    background-color: ${({ color }) => color};
    height: ${verticalValue}px;
  `;

  const ModalLimits = styled.View`
    max-height: ${Metrics.height - verticalValue * 2}px ;
    background-color: ${color};
    padding-left: ${Metrics.defaultSpace()}px;
    padding-right: ${Metrics.defaultSpace()}px;
    border-top-left-radius: ${Metrics.defaultSpace(topRadiusScale)}px;
    border-top-right-radius: ${Metrics.defaultSpace(topRadiusScale)}px;
  `;

  const Modal = styled.View`
    margin-top: ${verticalValue}px;
    justify-content: space-between;
  `;

  return (
    <Fragment>
      <Background
        style={{
          top: bgTop,
          opacity: bgOpacity,
        }}
      />
      <ModalContainer
        style={{
          top: containerTop,
        }}>
        <ModalContent>
          <Space color={'transparent'} />
          <ModalLimits>
            <Modal>{children}</Modal>
          </ModalLimits>
          <Space color={color} />
        </ModalContent>
      </ModalContainer>
    </Fragment>
  );
};
