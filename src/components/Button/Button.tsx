import React from "react";
import "./Button.scss";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className = "",
  onClick = () => void 0,
}: ButtonProps) => {
  return (
    <button className={`button ${className}`} onClick={() => onClick()}>
      {text}
    </button>
  );
};

export default Button;
