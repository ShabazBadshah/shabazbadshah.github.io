import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { deviceMaxWidth } from '../../../static/media-query-sizes.js';

import { globalThemeColour } from '../../assets/global-style-constants.js';

const Logo = ({ colour }) => {
  return (
    <StyledLogo
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="600.000000pt"
      height="500.000000pt"
      viewBox="0 0 599.000000 500.000000"
    >
      <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" fill={colour}>
        <path d="M175 4995 c-5 -2 -22 -6 -37 -9 -34 -8 -93 -59 -116 -100 -16 -29 -17 -189 -17 -2386 0 -2197 1 -2357 17 -2386 22 -40 81 -92 116 -101 35 -10 5689 -10 5724 0 35 9 94 61 116 101 16 29 17 188 17 2376 0 1290 -3 2357 -8 2372 -9 35 -61 94 -101 116 -29 16 -219 17 -2866 19 -1559 1 -2839 0 -2845 -2z m2335 -2717 l0 -292 33 31 c76 74 214 108 339 83 167 -32 285 -151 339 -343 21 -72 24 -104 24 -257 0 -153 -3 -185 -24 -257 -41 -146 -119 -251 -226 -304 -156 -76 -338 -57 -455 47 l-50 46 0 -40 c0 -74 4 -72 -156 -72 l-144 0 0 825 0 825 160 0 160 0 0 -292z m-854 198 c139 -44 243 -127 300 -238 27 -53 54 -148 54 -190 l0 -28 -163 0 -164 0 -12 56 c-10 44 -22 66 -55 99 -53 52 -114 69 -227 63 -64 -4 -87 -10 -125 -34 -61 -38 -87 -84 -81 -147 8 -89 76 -137 302 -212 318 -107 463 -220 509 -400 27 -103 16 -215 -30 -306 -109 -216 -474 -308 -799 -201 -207 68 -344 226 -362 419 l-6 63 165 0 164 0 12 -62 c16 -85 48 -130 119 -165 54 -26 67 -28 173 -28 104 0 119 2 159 25 59 33 86 79 85 146 -2 105 -61 152 -284 229 -292 100 -434 194 -502 333 -31 62 -33 73 -33 172 0 96 3 110 29 165 51 104 148 184 280 232 140 50 350 54 492 9z" />
        <path d="M2627 1835 c-22 -7 -50 -24 -64 -37 -50 -47 -53 -61 -53 -301 l0 -224 29 -40 c70 -96 226 -109 313 -25 60 57 73 110 73 292 0 179 -13 235 -70 293 -54 55 -145 72 -228 42z" />
      </g>
    </StyledLogo>
  );
};

export default Logo;

Logo.propTypes = {
  colour: PropTypes.string,
};

Logo.defaultProps = {
  colour: globalThemeColour,
};

const StyledLogo = styled.svg`
  display: block;
  border-radius: 4px;
  width: auto;
  height: 60px;

  @media ${deviceMaxWidth.tablet} {
    height: 50px;
  }

  @media ${deviceMaxWidth.mobileS} {
    height: 40px;
  }
`;
