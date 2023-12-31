import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
const PeopleIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={28}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#0F0F0F"
        stroke="#9B9B9B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M30.19 19.01c.676-1.643-1.028-3.901-3.134-4.767-2.106-.866-4.906-.46-5.582 1.182-.675 1.643.94 2.57 3.59 3.66 2.651 1.09 4.45 1.568 5.126-.075Z"
      />
      <Path
        fill="#0F0F0F"
        stroke="#9B9B9B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M25.18 10.546c-.642 1.56-.326 4.49 1.279 5.15 1.604.66 3.89-1.2 4.531-2.76.642-1.56-.139-3.36-1.743-4.02-1.605-.66-3.426.07-4.067 1.63ZM2.768 19.612c-.82-1.576.677-3.977 2.698-5.027 2.02-1.05 4.845-.896 5.664.68.82 1.577-.706 2.643-3.25 3.965-2.543 1.322-4.293 1.958-5.112.382Z"
      />
      <Path
        fill="#0F0F0F"
        stroke="#9B9B9B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M7.005 10.736c.778 1.496.725 4.442-.815 5.242-1.54.8-3.981-.848-4.76-2.345-.777-1.496-.16-3.358 1.38-4.158 1.539-.8 3.417-.236 4.195 1.26Z"
      />
      <Path
        fill="#0F0F0F"
        d="M25.786 21.118c0-3.563-4.885-6.452-9.453-6.452S6.88 17.555 6.88 21.118c0 3.564 3.704 4.05 9.453 4.05 5.75 0 9.453-.486 9.453-4.05Z"
      />
      <Path
        fill="#9B9B9B"
        stroke="#0F0F0F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.333}
        d="m5.899 24.573.911-.729-.911.729c.766.959 1.805 1.538 2.863 1.903 2.028.7 4.738.805 7.571.805 2.833 0 5.543-.105 7.571-.805 1.059-.365 2.097-.944 2.863-1.903l-.911-.729.911.729c.79-.988 1.13-2.178 1.13-3.455 0-2.799-1.89-4.976-3.972-6.332-2.135-1.391-4.9-2.232-7.592-2.232-2.692 0-5.456.84-7.592 2.232-2.082 1.356-3.973 3.533-3.973 6.332 0 1.277.341 2.467 1.131 3.455Zm3.093-3.455c0-.768.557-1.817 2.055-2.793 1.448-.944 3.41-1.547 5.286-1.547 1.876 0 3.838.603 5.287 1.547 1.497.976 2.054 2.025 2.054 2.793 0 .503-.121.711-.206.818-.108.135-.356.345-.941.547-1.26.435-3.276.574-6.194.574s-4.933-.139-6.194-.574c-.585-.202-.832-.412-.94-.547-.086-.107-.207-.315-.207-.818Z"
      />
      <Path
        fill="#0F0F0F"
        d="M10.031 9.239c0 3.384 2.821 8.578 6.302 8.578 3.48 0 6.302-5.194 6.302-8.578 0-3.384-2.822-6.127-6.302-6.127-3.48 0-6.302 2.743-6.302 6.127Z"
      />
      <Path
        fill="#9B9B9B"
        stroke="#0F0F0F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.333}
        d="M16.333 19.928c2.81 0 4.94-2.038 6.217-3.965 1.323-1.997 2.197-4.54 2.197-6.724C24.747 4.632 20.922 1 16.333 1 11.744 1 7.92 4.632 7.92 9.239c0 2.183.874 4.727 2.197 6.724 1.277 1.927 3.406 3.965 6.216 3.965Zm4.19-10.69c0 1.201-.537 2.947-1.494 4.392-1 1.51-2.022 2.074-2.696 2.074-.673 0-1.694-.564-2.695-2.074-.958-1.445-1.495-3.19-1.495-4.391 0-2.164 1.822-4.015 4.19-4.015 2.37 0 4.19 1.851 4.19 4.015Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32.667v28H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PeopleIcon;
