import React, { FC } from "react";

type ButtonProps =
  | {
      label: string;
      onClick: () => void;
    }
  | {
      label: string;
      onClick: (arg: any) => void;
    };

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{label}</button>
    </>
  );
};

export default Button;
