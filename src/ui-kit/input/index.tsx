import React, { FC } from 'react';

import './input.styles.scss';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}

const Input: FC<InputProps> = ({ value, onChange, placeholder, type }) => {
  return (
    <div>
      <input
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Input;
