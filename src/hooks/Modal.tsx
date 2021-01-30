import React, { createContext, useContext, useState } from 'react';

import { IModalContext, IModalTypes } from '../utils//interfaces';

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider: React.FC = ({ children }) => {
  const [modalType, setModalType] = useState<string>('default');
  const [scale, setScale] = useState<boolean>(false);
  const [toClose, setToClose] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  function openModal(type: IModalTypes): void {
    setModalType(type);
    setShowModal(true);
    setScale(true);
  }

  function removeModal(): void {
    setShowModal(false);
    setModalType('default');
    setToClose(false);
  }

  function backScale(): void {
    setScale(false);
  }

  function closeModal(): void {
    setToClose(true);
  }

  const value = {
    modalType,
    toClose,
    showModal,
    openModal,
    closeModal,
    removeModal,
    backScale,
    scale,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export function useModal(): IModalContext {
  return useContext(ModalContext);
}
