import { FC, memo } from "react";
import { DeleteIcon } from "../../../../shared/ui/icons/delete-icon";

import './deleteButton.scss';

type DeleteButtonProps = {
  onClick: () => void
}

export const DeleteButton: FC<DeleteButtonProps> = memo(({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0',
      }}
      aria-label="Delete"
    >
      <DeleteIcon className="delete-button" />
    </button>
  )
});