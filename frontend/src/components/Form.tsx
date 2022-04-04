import * as React from "react";
import styled from "styled-components";
import axios from "../axios";

import useInput from "../hooks/useInput";
import useTextArea from "../hooks/useTextArea";
import Alert from "./Alert";
import Button from "./Button";
import Title from "./Title";

interface IFormProps {}

const StyledForm = styled.form<IFormProps>``;

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
        <Title>Reach out to us!</Title>
        {inputName}
        {inputEmail}
        {textMessage}
        <Button type="submit">send message</Button>
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
