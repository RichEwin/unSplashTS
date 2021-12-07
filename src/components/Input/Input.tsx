import React from 'react';
import { IInputProps } from '../../types/inputProps';
import './Input.scss';

const Input: React.FC<IInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => (
  <div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Input;
