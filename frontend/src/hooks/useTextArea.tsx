import * as React from "react";
import TextArea from "../components/TextArea";

type params = {
  placeholder?: string;
  required?: boolean;
};

export default function useTextArea(args: params) {
  const [value, setValue] = React.useState("");

  const changeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };
  const element = (
    <TextArea
      rows={4}
      value={value}
      placeholder={args.placeholder}
      required={args.required}
      onChange={changeHandler}
    />
  );
  return [value, element];
}
