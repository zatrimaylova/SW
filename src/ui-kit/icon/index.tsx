import React, { FC } from 'react';

import icons from './icons';

interface IconProps {
  name: string;
  size: number;
  color: string;
}

const Icon: FC<IconProps> = ({ name, size, color }) => {
  return icons[name]?.code({ width: size, height: size, color }) || null;
};

export default Icon;
