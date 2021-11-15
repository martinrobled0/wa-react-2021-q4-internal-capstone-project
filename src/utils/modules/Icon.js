import React from 'react';
import PropTypes from 'prop-types';
import { IconObject } from './Icon.styled';
import styled from 'styled-components';

const Svg = styled(IconObject)` 
`

const Icon = ({ src, fill , name, viewbox, width, height}) => (
    <Svg viewBox={viewbox} name={name} width={width} height={height}>   
    <path
      fill={fill}
      d={src}   
    />
    <circle fill={fill} className="cls-1" cx="225.28" cy="450.56" r="40.96"/><circle fill={fill} className="cls-1" cx="389.12" cy="450.56" r="40.96"/>
  </Svg>
);

Icon.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string,
    fill: PropTypes.string,
};

export default Icon;