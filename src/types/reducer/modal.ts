export interface ModalStore {
  isOpen: boolean;
  Component?: () => JSX.Element;
  onClose?: () => void;
}

export interface ModalOption {
  onClose?: () => void;
}
