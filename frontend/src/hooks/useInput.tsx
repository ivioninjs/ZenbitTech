import * as React from "react";
import Input from "../components/Input";

type params = {
  placeholder?: string;
  required?: boolean;
  type: string;
};

export default function useInput(args: params) {
  const [value, setValue] = React.useState("");
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };
  const element = (
    <Input
      type={args.type}
      value={value}
      placeholder={args.placeholder}
      required={args.required}
      onChange={changeHandler}
    />
  );
  return [value, element];
}
