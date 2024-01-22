import { useState } from "react";

const Input = ({ required, name, placeholder = "", type = "text", value, onChange }) => {
  return (
    <div>
      <label htmlFor=""></label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        name={name}
      />
    </div>
  );
};

export default Input;
