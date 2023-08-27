import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

interface DisableHeartProps extends SvgProps {}

export const DisableHeart: React.FC<DisableHeartProps> = props => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#9F9F9F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.111 3C19.633 3 22 6.353 22 9.48 22 15.814 12.178 21 12 21c-.178 0-10-5.186-10-11.52C2 6.352 4.367 3 7.889 3 9.91 3 11.233 4.024 12 4.924 12.767 4.024 14.089 3 16.111 3Z"
    />
  </Svg>
);

export default DisableHeart;
