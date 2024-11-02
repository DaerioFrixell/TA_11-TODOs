import { ButtonHTMLAttributes, FC } from "react"

type ButtonProps = {
  text: string

  className?: string
  iconPossition?: 'left' | 'right' | undefined
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

export const Button: FC<ButtonProps> = ({
  text,
  className,
  iconPossition = undefined,
  type = 'button' }) => {
  return (
    <div>
      {iconPossition === 'left'
        ? (<span>icon</span>)
        : (null)
      }

      <button
        className={`button ${className}`}
        type={type}>
        {text}
      </button>

      {iconPossition === 'right'
        ? (<span>icon</span>)
        : (null)
      }
    </div>
  )
}