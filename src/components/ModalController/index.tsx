import React, { Fragment } from 'react';
import { IModalType } from '../../utils/interfaces';
import { useModal } from '../../hooks';

export const ModalController: React.FC = () => {
  const { modalType } = useModal();

  const Modals: IModalType = {
    Initial: <Fragment />,
  };

  return Modals[modalType] || <Fragment />;
};
