import { FC, InputHTMLAttributes } from "react";

import './input.scss';

type InputProps = {
  value: string
  placeholder: string
  onChange: () => void

  className?: string
  type?: InputHTMLAttributes<HTMLInputElement>['type']
}

export const Input: FC<InputProps> = ({
  value,
  placeholder,
  onChange,
  className,
  type = "text"
}) => {
  return (
    <div className={`input-standard ${className}`}>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange} />
    </div>
  );
};