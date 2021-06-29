import React from "react";
import "./Button.scss";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className = "",
  onClick = () => void 0,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`button ${className}`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
