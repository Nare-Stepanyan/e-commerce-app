import React, { FC } from "react";

type ButtonProps =
  | {
      label?: string;
      onClick: () => void;
      className?: string;
    }
  | {
      label?: string;
      onClick: (arg: any) => void;
      className?: string;
    };

const Button: FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default Button;
