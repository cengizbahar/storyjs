import React from "react";
import cx from "classnames";
// Types
import { status, size } from "./Button.Types";
// Interfaces
import { IButton } from "../../interfaces";

interface IButtonProps extends IButton {
  text?: string;

  status?: status;

  loading?: boolean;

  size?: size;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const { text, status, loading, size, children, className } = props;
  const classNames = cx(
    "custom-button",
    { loading: loading },
    size,
    status,
    className
  );

  return (
    <button className={classNames} {...props}>
      {text || children}
    </button>
  );
};