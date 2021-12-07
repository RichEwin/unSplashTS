import React from 'react';
import '../Button/Button.scss'
import { IButtonProps } from '../../types/buttonProps.type';

const Button: React.FC<IButtonProps> = ({ onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
