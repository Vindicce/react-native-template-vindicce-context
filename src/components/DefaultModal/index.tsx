import React, { useState, useEffect } from 'react';
import {
  Animated,
  Keyboard,
  BackHandler,
  StatusBar,
  Easing,
} from 'react-native';
import { metrics } from '../../styles';
import { useModal } from '../../hooks';
import * as C from './styles';

interface IDefaultModal {
  children?: React.ReactNode;
  duration?: number;
  showBackground?: boolean;
  showCloseButton?: boolean;
  animationToRemove?: string;
}

const DefaultModal: React.FC<IDefaultModal> = ({
  children,
  duration,
  showBackground,
  animationToRemove,
}) => {
  const { toClose, removeModal, backScale } = useModal();
  const [animationValue] = useState(duration);
  const [bgTop] = useState(new Animated.Value(metrics.height));
  const [bgOpacity] = useState(new Animated.Value(0));
  const [containerTop] = useState(new Animated.Value(metrics.height));

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
    backScale();
    setTimeout(() => {
      removeModal();
    }, animationValue);
  }

  function moveTop() {
    StatusBar.setBarStyle('light-content', true);
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
          easing: Easing.in(Easing.in),
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  }

  function moveBottom() {
    StatusBar.setBarStyle('dark-content', true);
    Keyboard.dismiss();
    if (animationToRemove == 'default') {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(bgOpacity, {
            toValue: 0,
            duration: animationValue,
            useNativeDriver: true,
          }),
          Animated.timing(containerTop, {
            toValue: metrics.height,
            duration: animationValue,
            useNativeDriver: true,
            easing: Easing.in(Easing.bounce),
          }),
        ]),
        Animated.timing(bgTop, {
          toValue: metrics.height,
          useNativeDriver: true,
          duration: animationValue,
        }),
      ]).start();
    } else {
      Animated.sequence([
        Animated.timing(bgOpacity, {
          toValue: 0,
          duration: animationValue,
          useNativeDriver: true,
        }),
        Animated.parallel([
          Animated.timing(containerTop, {
            toValue: metrics.height,
            duration: animationValue,
            useNativeDriver: true,
          }),
          Animated.timing(bgTop, {
            toValue: metrics.height,
            duration: animationValue,
            useNativeDriver: true,
          }),
        ]),
      ]).start();
    }
  }

  return (
    <>
      <C.BG
        style={{
          top: bgTop,
          opacity: bgOpacity,
          backgroundColor: showBackground ? 'rgba(0, 0, 0, 0.6)' : '',
        }}
      />
      <C.Container style={{ top: containerTop }}>{children}</C.Container>
    </>
  );
};

export default DefaultModal;
