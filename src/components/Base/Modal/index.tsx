import * as React from "react";
import { useEffect } from "react";

import { Text } from "../Text";

import { useModal, useWallet, useModalMessage } from "../../../hooks";

import { IModal } from "./data";
import { Modal as Layout } from "./Layout";

export const Modal: React.FC<IModal> = ({
  hasBackdrop = true,
  avoidKeyboard = false,
  ...props
}) => {
  const {
    closeModal: closeModalHook,
    closeFunctions,
    defineCloseFunctions,
  } = useModal();

  const { clean } = useModalMessage();

  useEffect(() => {
    return () => clean();
  }, []);

  const { coin } = useWallet();

  const closeModal = () => {
    closeModalHook();
    closeFunctions[0]();
    defineCloseFunctions([() => {}]);
  };

  const layoutProps = {
    ...props,
    coin,
    avoidKeyboard,
    closeModal,
    isVisible: true,
    onBackButtonPress: hasBackdrop ? closeModal : () => {},
    onBackdropPress: hasBackdrop ? closeModal : () => {},
  };

  return <Layout {...layoutProps} />;
};

export const ModalTitle: React.FC = ({ children }) => (
  <Text size="large" mb={1}>
    {children}
  </Text>
);

export const ModalDescription: React.FC = ({ children }) => (
  <Text size="small" mb={4}>
    {children}
  </Text>
);

export const ModalItem: React.FC = ({ children }) => (
  <Text size="xsmall" mb={2}>
    {children}
  </Text>
);
