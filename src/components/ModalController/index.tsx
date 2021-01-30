import React, { Fragment } from 'react';
import { IModal } from '../../utils/interfaces';
import { useModal } from '../../hooks';
// import modal

export const ModalController: React.FC = () => {
  const { modalType } = useModal();

  const Modals: IModal = {
    Initial: <Fragment />,
    // add modal
  };

  return Modals[modalType] || <Fragment />;
};
