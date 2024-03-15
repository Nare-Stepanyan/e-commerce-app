import React, { FC } from "react";

type ButtonProps =
  | {
      label?: string;
      onClick?: () => void;
      className?: string;
      disabled?: boolean;
    }
  | {
      label?: string;
      onClick: (arg: any) => void;
      className?: string;
      disabled?: boolean;
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
