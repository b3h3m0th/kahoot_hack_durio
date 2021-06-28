import React from "react";
import "./Input.scss";

interface InputProps {
  type?: string;
  className?: string;
  placeholder?: string;
  name?: string;
  min?: number;
  max?: number;
  value?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  className = "",
  placeholder = "",
  name = "",
  min,
  max,
  value,
  label,
  onChange = () => void 0,
}) => {
  return (
    <div className="input">
      {label && (
        <>
          <label className="input__label" htmlFor={name && name}>
            {label}
          </label>{" "}
          <br />
        </>
      )}
      <input
        type={type}
        className={`input__input ${className}`}
        placeholder={placeholder}
        name={name}
        min={min && min}
        max={max && max}
        value={value && value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        id={name && name}
      />
    </div>
  );
};

export default Input;
