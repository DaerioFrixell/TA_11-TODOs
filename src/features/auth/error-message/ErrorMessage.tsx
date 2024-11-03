import { FC } from "react";
import { Button } from "../../../shared/ui/components/button";

import './errorMessage.scss';

type ErrorMessageProps = {
  isWrongCreds: boolean
  onClick: () => void
}

export const ErrorMessage: FC<ErrorMessageProps> = ({
  isWrongCreds,
  onClick,
}) => {
  if (isWrongCreds) {
    return (
      <div className="error-message">
        <div className='error-message__text'>
          Введите логин: admin и пароль: admin
        </div>

        <Button
          className='error-message__btn'
          text='закрыть'
          onClick={onClick}
        />
      </div>
    )
  };
};