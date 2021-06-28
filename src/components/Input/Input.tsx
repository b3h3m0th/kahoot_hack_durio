import React from "react";
import "./Input.scss";

interface InputProps {
  type?: string;
  className?: string;
  placeholder?: string;
  name?: string;
  min?: number;
  max?: number;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  className = "",
  placeholder = "",
  name = "",
  min,
  max,
}) => {
  return (
    <div className="input">
      <input
        type={type}
        className={`input__input ${className}`}
        placeholder={placeholder}
        name={name}
        min={min}
        max={max}
      />
    </div>
  );
};

export default Input;
