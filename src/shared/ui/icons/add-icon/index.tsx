import { FC } from 'react';
import { CustomIconProps } from '../type';

export const AddIcon: FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      fill='#fff'
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 455 455"
    >
      <polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 455,242.5" />
    </svg>
  );
};