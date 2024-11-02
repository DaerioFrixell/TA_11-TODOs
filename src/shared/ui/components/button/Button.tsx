import { ButtonHTMLAttributes, FC } from "react";

import './button.scss';

type ButtonProps = {
  text: string

  className?: string
  iconPossition?: 'left' | 'right' | undefined
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

// TODO: сделать иконки
export const Button: FC<ButtonProps> = ({
  text,
  className,
  iconPossition = undefined,
  type = 'button' }) => {
  return (
    <div className={`wrapper-button ${className}`}>
      {iconPossition === 'left'
        ? (<div>icon</div>)
        : (null)
      }

      <button
        className="button"
        type={type}>
        {text.toUpperCase()}
      </button>

      {iconPossition === 'right'
        ? (<span>icon</span>)
        : (null)
      }
    </div>
  )
}