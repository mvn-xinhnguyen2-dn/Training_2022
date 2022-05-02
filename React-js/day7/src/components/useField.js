import { useState } from "react";

export default function useField(type) {
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = (event) => {
    const target = event.target;
    const inputValue =
      target.type === "checkbox" ? target.checked : target.value;
    setInputValue(inputValue);
  };
  return {
    type,
    inputValue,
    onChange: handleOnChange,
  };
}
