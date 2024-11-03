import { FC } from 'react';
import { CheckmarkIcon } from '../../../../shared/ui/icons/checkmark-icon';

import './checkbox.scss';

type CheckboxProps = {
  isChecked: boolean
  onChange: () => void
}

export const Checkbox: FC<CheckboxProps> = ({
  isChecked,
  onChange,
}) => {
  return (
    <label className='checkbox'>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />

      <CheckmarkIcon className={isChecked ? 'isChecked' : 'default'} />
    </label>
  );
};