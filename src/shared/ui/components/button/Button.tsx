import { ButtonHTMLAttributes, FC } from "react";

import './button.scss';

type ButtonProps = {
  text: string
  onClick: () => void

  className?: string
  iconPossition?: 'left' | 'right' | undefined
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

// TODO: сделать иконки
export const Button: FC<ButtonProps> = ({
  text,
  className,
  onClick,
  iconPossition = undefined,
  type = 'button'
}) => {
  return (
    <div className={`wrapper-button ${className}`} onClick={onClick}>
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