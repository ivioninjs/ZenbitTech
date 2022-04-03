import * as React from "react";
import styled from "styled-components";

interface IFormInputItemProps {}

const FormInputItem: React.FC<IFormInputItemProps> = props => {
  return <h1>Input</h1>;
};

export default FormInputItem;

const Input = styled.input`
  background: #ffffff;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 10px;
`;
