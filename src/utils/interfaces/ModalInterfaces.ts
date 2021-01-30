export interface IModalContext {
  modalType: string;
  toClose: boolean;
  showModal: boolean;
  scale: boolean;
  openModal(modal: IModalTypes): void;
  closeModal(): void;
  removeModal(): void;
  backScale(): void;
}

export type IModal = { [key: string]: JSX.Element };

export type IModalTypes = 'Initial';
