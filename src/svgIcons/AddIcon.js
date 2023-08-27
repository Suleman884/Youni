import * as React from 'react';
import Svg, {G, Rect, Path, Defs, ClipPath} from 'react-native-svg';

const AddIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}>
    <G stroke="#9B9B9B" strokeWidth={2} clipPath="url(#a)">
      <Rect width={26} height={26} x={1} y={1} rx={8.333} />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 14V8.167M14 14v5.833M14 14h5.833H8.167"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h28v28H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default AddIcon;
