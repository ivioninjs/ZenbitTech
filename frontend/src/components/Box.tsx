import * as React from "react";
import styled from "styled-components";

interface IBoxProps {
  width?: string;
  height?: string;
  maxWidth?: string;
  margin?: string;
  padding?: string;
}

const StyledBox = styled.div<IBoxProps>`
  width: ${({ width }) => width || "auto"};
  max-width: ${({ maxWidth }) => maxWidth || "none"};
  height: ${({ height }) => height || "auto"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
`;
const Box: React.FunctionComponent<IBoxProps> = props => {
  return <StyledBox {...props} />;
};

export default Box;
