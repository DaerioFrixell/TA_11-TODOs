import { ChangeEvent, FC, InputHTMLAttributes } from "react"
import { Input } from "../../../shared/ui/components/input";

import './formItem.scss';

type FormItemProps = {
  label: string
  placeholder: string
  value: string
  autoComplete: string

  type?: InputHTMLAttributes<HTMLInputElement>['type']
  className?: string
  required?: boolean
  autoFocus?: boolean

  onChange: (event: ChangeEvent<HTMLInputElement>) => void
};

export const FormItem: FC<FormItemProps> = ({
  label,
  placeholder,
  value,
  autoComplete,
  className,
  type = 'text',
  required = false,
  autoFocus = false,
  onChange,
}) => {
  return (
    <div>
      <label>
        <p className="form-item-label">
          {label}
        </p>

        <Input
          className={className}
          placeholder={placeholder}
          type={type}
          value={value}
          autoComplete={autoComplete}
          required={required}
          onChange={onChange}
          autoFocus={autoFocus}
        />
      </label>
    </div>
  )
}