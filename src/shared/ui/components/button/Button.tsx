import { ButtonHTMLAttributes, FC } from "react";

import './button.scss';
import { AddIcon } from "../../icons/add-icon";
import { LinesIcon } from "../../icons/lines-icon";

type ButtonProps = {
  text: string

  className?: string
  iconPossition?: 'left' | 'right' | undefined
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({
  text,
  className,
  onClick,
  iconPossition = undefined,
  type = 'button'
}) => {
  return (
    <div className={`${className} wrapper-button`} onClick={onClick}>
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