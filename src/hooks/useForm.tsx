import { useState, ChangeEvent, FormEvent } from "react";

function useForm<T>(value: T) {
  const [Text, SetText] = useState(value);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    SetText({
      ...Text,
      [name]: value,
    });
  };
  return {
    handleChange,
    Text,
  };
}

export default useForm;
