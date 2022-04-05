import * as React from "react";
import styled from "styled-components";

interface ILinkProps {
  path: string;
}
const StyledLink = styled.a`
  display: inline-block;
  padding: 5px;
  cursor: pointer;
`;
const Link: React.FunctionComponent<ILinkProps> = props => {
  return <StyledLink href={props.path} {...props} />;
};

export default Link;
