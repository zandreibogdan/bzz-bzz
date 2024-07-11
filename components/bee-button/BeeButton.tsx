// components/Button.tsx
import React, { FC, ReactNode } from "react";
import classNames from "classnames";

interface BeeButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
}

const BeeButton: FC<BeeButtonProps> = ({
  children,
  onClick = () => {},
  className = "",
  variant = "primary",
  size = "medium",
  ...props
}) => {
  const baseStyle = "px-4 py-2 rounded focus:outline-none";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };
  const sizeStyles = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const classes = classNames(
    baseStyle,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default BeeButton;
