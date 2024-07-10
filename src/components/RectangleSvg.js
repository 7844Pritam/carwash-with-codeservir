// RectangleSvg.js
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Dimensions } from 'react-native';
import appColors from '../assets/config/Appcolor';

const windowWidth = Dimensions.get('window').width;

const RectangleSvg = ({ style }) => {
  const borderRadius = 20; // Adjust the border radius as needed

  return (
    <Svg height="100" width={windowWidth} viewBox={`0 0 ${windowWidth} 100`} style={style}>
      <Path
        d={`M0,0 L${windowWidth},0 L${windowWidth},100 L0,100 Z`} // Defines the path for the rectangle
        fill={appColors.secondary} // Fill color
        stroke={appColors.border} // Border color
        strokeWidth={2} // Border width
      />
      <Path
        d={`M0,0 L${borderRadius},0 A${borderRadius},${borderRadius} 0 0,1 ${0},${borderRadius} L0,0 Z`}
        fill={appColors.secondary} // Fill color for the top left corner
        stroke={appColors.border} // Border color for the top left corner
        strokeWidth={2} // Border width for the top left corner
      />
      <Path
        d={`M${windowWidth},${0} L${windowWidth - borderRadius},${0} A${borderRadius},${borderRadius} 0 0,1 ${windowWidth},${borderRadius} L${windowWidth},${0} Z`}
        fill={appColors.secondary} // Fill color for the top right corner
        stroke={appColors.border} // Border color for the top right corner
        strokeWidth={2} // Border width for the top right corner
      />
    </Svg>
  );
};

export default RectangleSvg;
