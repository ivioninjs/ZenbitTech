import * as React from "react";
import styled, { css } from "styled-components";

interface IButtonProps {
  type: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  outlined?: boolean;
}

const StyledButton = styled.button<IButtonProps>`
  border: none;
  cursor: pointer;
  border-radius: 500px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  padding: 27px 52px;

  font-family: "Apercu Arabic Pro";
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;

  color: #fff;
  background-color: #fad34f;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-1px);
  }

  ${({ outlined }) =>
    outlined &&
    css`
      border: 1px solid #fad34f;
      color: #000;
      background-color: transparent;
    `}
`;

const Button: React.FC<IButtonProps> = props => {
  return <StyledButton {...props} />;
};

export default Button;
