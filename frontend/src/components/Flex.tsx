import * as React from "react";
import styled from "styled-components";

interface IFlexProps {
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  align?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  margin?: string;
  height?: string;
  background?: string;
}

const StyledFlex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ align }) => align || "stretch"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  margin: ${({ margin }) => margin || "0"};
  height: ${({ height }) => height || "auto"};
  background-color: ${({ background }) => background || "transparent"};
`;

const Flex: React.FC<IFlexProps> = props => {
  return <StyledFlex {...props} />;
};

export default Flex;
