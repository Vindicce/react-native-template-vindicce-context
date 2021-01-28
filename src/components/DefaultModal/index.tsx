import React, { useState, useEffect, Fragment } from 'react';
import { Metrics } from '../../styles';
import { useModal } from '../../hooks';
import { Animated, Keyboard, BackHandler, Easing } from 'react-native';
import IModal from './data';

export const DefaultModal: React.FC<IModal> = ({
  children,
  duration,
  showBackground,
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
        Animated.timing(bgOpacity, {
          toValue: 0,
          duration: animationValue,
          useNativeDriver: false,
        }),
        Animated.timing(containerTop, {
          toValue: Metrics.height,
          duration: animationValue,
          useNativeDriver: false,
        }),
        Animated.timing(bgTop, {
          toValue: Metrics.height,
          duration: animationValue,
          useNativeDriver: false,
        }),
      ]),
    ]).start(() => removeModal());
  }

  return (
    <Fragment>
      <Animated.View
        style={{
          zIndex: 5,
          position: 'absolute',
          width: Metrics.width,
          height: Metrics.height,
          top: bgTop,
          opacity: bgOpacity,
          backgroundColor: showBackground ? 'rgba(0, 0, 0, 0.6)' : '',
        }}
      />
      <Animated.View
        style={{
          zIndex: 10,
          position: 'absolute',
          width: Metrics.width,
          height: Metrics.height,
          top: containerTop,
        }}>
        {children}
      </Animated.View>
    </Fragment>
  );
};
