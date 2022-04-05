import * as React from "react";
import styled, { css } from "styled-components";

interface IBoxProps {
  width?: string;
  height?: string;
  maxWidth?: string;
  margin?: string;
  padding?: string;
  sm?: IBoxProps;
}

const StyledBox = styled.div<IBoxProps>`
  width: ${({ width }) => width || "auto"};
  max-width: ${({ maxWidth }) => maxWidth || "none"};
  height: ${({ height }) => height || "auto"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};

  @media ${props => props.theme.media.phone} {
    ${({ sm }) =>
      sm &&
      css`
        width: ${sm.width};
        max-width: ${sm.maxWidth};
        height: ${sm.height};
        margin: ${sm.margin};
        padding: ${sm.padding};
      `}
  }
`;
const Box: React.FunctionComponent<IBoxProps> = props => {
  return <StyledBox {...props} />;
};

export default Box;
