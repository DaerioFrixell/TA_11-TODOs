import { ChangeEvent, FC, InputHTMLAttributes } from "react";

import './input.scss';

type InputProps = {
  value: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void

  className?: string
  type?: InputHTMLAttributes<HTMLInputElement>['type']
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = ({
  value,
  placeholder,
  onChange,
  className,
  type = "text",
  ...props
}) => {
  return (
    <div className={`input-standard ${className}`}>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props} />
    </div>
  );
};