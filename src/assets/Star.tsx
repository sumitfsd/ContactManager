import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";
const SVGComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="24em"
    height="24em"
    viewBox="0 0 256 256"
    xmlSpace="preserve"
    {...props}
  >
    <Defs />
    <G
      style={{
        stroke: "none",
        strokeWidth: 0,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "none",
        fillRule: "nonzero",
        opacity: 1,
      }}
      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
    >
      <Path
        d="M 18.228 87.915 c -0.416 0 -0.832 -0.13 -1.184 -0.389 c -0.693 -0.509 -0.983 -1.403 -0.721 -2.222 l 9.549 -29.801 L 0.815 37.065 C 0.119 36.553 -0.17 35.651 0.1 34.83 c 0.27 -0.821 1.036 -1.376 1.9 -1.376 h 31.018 L 43.104 3.448 C 43.378 2.634 44.141 2.085 45 2.085 s 1.622 0.548 1.895 1.363 l 10.086 30.006 H 88 c 0.864 0 1.631 0.555 1.9 1.376 c 0.27 0.821 -0.019 1.723 -0.715 2.235 L 64.128 55.504 l 9.548 29.801 c 0.263 0.818 -0.027 1.713 -0.72 2.222 c -0.695 0.509 -1.635 0.52 -2.336 0.023 L 45 69.506 L 19.38 87.55 C 19.034 87.794 18.631 87.915 18.228 87.915 z M 8.092 37.454 l 21.308 15.68 c 0.692 0.51 0.981 1.403 0.719 2.222 l -8.167 25.49 l 21.895 -15.421 c 0.691 -0.486 1.613 -0.486 2.303 0 l 21.895 15.421 l -8.167 -25.49 c -0.263 -0.818 0.027 -1.712 0.719 -2.222 l 21.308 -15.68 H 55.544 c -0.859 0 -1.622 -0.548 -1.895 -1.363 L 45 10.363 l -8.648 25.729 c -0.274 0.814 -1.037 1.363 -1.896 1.363 H 8.092 z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(0,0,0)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
    </G>
  </Svg>
);
export default SVGComponent;
