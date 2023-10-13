import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SVGComponent = (props: any) => (
  <Svg
    fill="#000000"
    height="24em"
    width="24em"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 485 485"
    xmlSpace="preserve"
    {...props}
  >
    <G>
      <Path d="M314.042,90.965v-59.93H170.958v59.93H0v362.999h485V90.965H314.042z M200.958,61.035h83.083v29.93h-83.083V61.035z  M455,120.965v89.5H30v-89.5H455z M222.5,240.465h40v29.5h-40V240.465z M30,423.965v-183.5h162.5v59.5h100v-59.5H455v183.5H30z" />
    </G>
  </Svg>
);
export default SVGComponent;
