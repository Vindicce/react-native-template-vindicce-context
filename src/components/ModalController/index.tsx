import React, { Fragment } from 'react';
import Button from '../../components/Button';
import { useModal } from '../../hooks';

const ModalController: React.FC = () => {
  const { modalType } = useModal();

  const Modals: { [key: string]: JSX.Element } = {
    Button: <Button />,
  };

  return Modals[modalType] || <Fragment />;
  // return <Fragment />;
};

export default ModalController;
