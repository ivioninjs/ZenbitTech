import * as React from "react";
import styled from "styled-components";

interface IBoxProps {
  width: string;
  height: string;
  maxWidth: string;
}

const StyledBox = styled.div<IBoxProps>`
  width: ${({ width }) => width || "auto"};
  max-width: ${({ maxWidth }) => maxWidth || "none"};
  height: ${({ height }) => height || "auto"};
`;
const Box: React.FunctionComponent<IBoxProps> = props => {
  return <StyledBox {...props} />;
};

export default Box;
