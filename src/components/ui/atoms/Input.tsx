import React from "react";

interface InputProps {
  width?: string;
  height?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}

function Input(props: InputProps) {
  return <div></div>;
}

export default Input;
