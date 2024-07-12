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
    // primary: "bg-primary text-text hover:bg-accent",
    primary:
      "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-secondary bg-primary hover:bg-accent md:py-4 md:text-lg md:px-10",
    // secondary:"text-text border border-primary hover:text-accent hover:border-accent",
    secondary:
      "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-secondary hover:bg-secondary-light md:py-4 md:text-lg md:px-10",
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
    <>
      <button className={classes} onClick={onClick} {...props}>
        <a href="">{children}</a>
      </button>

      <div className="rounded-md shadow">
        {/* <a
          href="#"
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-secondary bg-primary hover:bg-accent md:py-4 md:text-lg md:px-10"
        >
          Shop Now
        </a>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-3">
        <a
          href="#"
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-secondary hover:bg-secondary-light md:py-4 md:text-lg md:px-10"
        >
          Learn More
        </a> */}
      </div>
    </>
  );
};

export default BeeButton;
