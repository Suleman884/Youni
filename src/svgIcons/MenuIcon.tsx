import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const MenuIcon: React.FC<SvgProps> = props => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12h18M3 6h18M3 18h18"
    />
  </Svg>
);

export default MenuIcon;
