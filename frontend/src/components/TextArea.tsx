import * as React from "react";
import styled from "styled-components";

interface ITextAreaProps {
  name?: string;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => any;
  rows?: number;
}

const StyledTextArea = styled.textarea<ITextAreaProps>`
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 30px 46px;
  margin: 0;
  width: 100%;
  resize: none;

  font-family: "Apercu Arabic Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;

  color: #2d2d2d;

  &:focus {
    outline: none;
    border: 1px solid #2d2d2d;
  }
`;
const TextArea: React.FC<ITextAreaProps> = props => {
  return <StyledTextArea {...props} />;
};

export default TextArea;
