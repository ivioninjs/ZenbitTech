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
  zIndex?: number;
  circle?: boolean;
  invicible?: boolean;
  sm?: ILayerProps;
  md?: ILayerProps;
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

  @media ${props => props.theme.media.phone} {
    ${({ sm }) =>
      sm &&
      css`
        top: ${sm.top};
        right: ${sm.right};
        bottom: ${sm.bottom};
        left: ${sm.left};
        height: ${sm.height};
        width: ${sm.width};
        opacity: ${sm.invicible ? 0 : 1};
      `}
  }

  @media ${props => props.theme.media.tablet} {
    ${({ md }) =>
      md &&
      css`
        top: ${md.top};
        right: ${md.right};
        bottom: ${md.bottom};
        left: ${md.left};
        height: ${md.height};
        width: ${md.width};
        opacity: ${md.invicible ? 0 : 1};
      `}
  }
`;

const Layer: React.FunctionComponent<ILayerProps> = props => {
  return <StyledLayer {...props} />;
};

export default Layer;
