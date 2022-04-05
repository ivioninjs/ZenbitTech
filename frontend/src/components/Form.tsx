import * as React from "react";
import styled from "styled-components";
import axios from "../axios";

import useInput from "../hooks/useInput";
import useTextArea from "../hooks/useTextArea";
import Alert from "./UI/Alert";
import Button from "./Button";
import Title from "./Title";
import Box from "./Box";

interface IFormProps {}

const StyledForm = styled.form<IFormProps>`
  display: block;
  max-width: 557px;
  position: relative;
  z-index: 1;
`;

const Form: React.FC<IFormProps> = props => {
  const [isOpen, setOpen] = React.useState(false);
  const [name, inputName] = useInput({
    type: "text",
    placeholder: "Your name*",
    required: true,
  });
  const [email, inputEmail] = useInput({
    type: "email",
    placeholder: "Your email*",
    required: true,
  });
  const [message, textMessage] = useTextArea({
    placeholder: "Your message*",
    required: true,
  });

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/callback", { name, email, message });
      setOpen(prev => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <StyledForm onSubmit={submitHandler}>
        <Box margin="30px 0">
          <Title>Reach out to us!</Title>
        </Box>
        <Box margin="0 0 8px 0">{inputName}</Box>
        <Box margin="0 0 8px 0">{inputEmail}</Box>
        <Box>{textMessage}</Box>
        <Box margin="23px 0">
          <Button type="submit">send message</Button>
        </Box>
      </StyledForm>
      {isOpen && (
        <Alert isOpened={isOpen} onClose={() => setOpen(prev => !prev)}>
          <Title align="center">{name}, спасибо!</Title>
          <p>
            Ваша заявка отправлена на обработку. <br /> Скоро с Вами свяжутся
            наши специалисты!
          </p>
        </Alert>
      )}
    </React.Fragment>
  );
};

export default Form;
