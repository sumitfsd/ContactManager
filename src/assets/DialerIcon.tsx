import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props: any) => (
  <Svg
    width="24em"
    height="24em"
    viewBox="0 0 192 192"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <Path
      stroke="#000000"
      strokeLinejoin="round"
      strokeWidth={12}
      d="M37.231 22c-8.837 0-16.091 7.185-15.148 15.97 3.7 34.49 19.25 65.435 42.496 88.682 23.246 23.246 54.189 38.795 88.679 42.496 8.786.943 15.973-6.312 15.973-15.148v-16.096a16 16 0 0 0-11.402-15.326l-19.446-3.832a16 16 0 0 0-15.91 4.012l-9.681 9.681a124.373 124.373 0 0 1-31.243-22.757 124.374 124.374 0 0 1-22.757-31.243l9.681-9.681a16.001 16.001 0 0 0 4.012-15.912l-3.834-19.444A15.999 15.999 0 0 0 53.327 22H37.23Z"
    />
  </Svg>
);
export default SVGComponent;
