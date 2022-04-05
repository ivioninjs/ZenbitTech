import * as React from "react";
import styled, { css } from "styled-components";

interface ILayerProps {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  height?: string;
  width?: string;
  borderRadius?: number;
  zIndex: number;
  circle?: boolean;
}

const StyledLayer = styled.div<ILayerProps>`
  position: absolute;
  top: ${({ top }) => top || "auto"};
  right: ${({ right }) => right || "auto"};
  bottom: ${({ bottom }) => bottom || "auto"};
  left: ${({ left }) => left || "auto"};
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "auto"};
  z-index: ${({ zIndex }) => zIndex || "auto"};

  ${({ circle }) =>
    circle &&
    css`
      border-radius: 50%;
      overflow: hidden;
      display: inline-block;
    `}
`;

const Layer: React.FunctionComponent<ILayerProps> = props => {
  return <StyledLayer {...props} />;
};

export default Layer;
