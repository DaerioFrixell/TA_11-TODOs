import { FC } from 'react';
import { CustomIconProps } from '../type';

export const LinesIcon: FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      fill='#fff'
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="2" rx="1" width="24" y="11" />
      <rect height="2" rx="1" width="24" y="4" />
      <rect height="2" rx="1" width="24" y="18" />
    </svg>
  );
};