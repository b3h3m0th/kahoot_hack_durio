import React from "react";

interface InputProps {
  type?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ type = "text", className = "" }) => {
  return (
    <div className="input">
      <input type={type} className={`input__input ${className}`} />
    </div>
  );
};

export default Input;
