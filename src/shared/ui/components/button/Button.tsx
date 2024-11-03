import { ButtonHTMLAttributes, FC } from "react";

import './button.scss';
import { AddIcon } from "../../icons/add-icon";
import { LinesIcon } from "../../icons/lines-icon";

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
        ? (<AddIcon className="add-icon" />)
        : (null)
      }

      <button
        className="button"
        type={type}>
        {text.toUpperCase()}
      </button>

      {iconPossition === 'right'
        ? (<LinesIcon className="delete-all-icon" />)
        : (null)
      }
    </div>
  )
}