import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SupportIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}>
    <Path
      fill="#0F0F0F"
      stroke="#9B9B9B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M23 14a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z"
    />
    <Path
      fill="#0F0F0F"
      stroke="#9B9B9B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 23a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM9 14a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM27 14a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM18 5a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
    />
  </Svg>
);
export default SupportIcon;
