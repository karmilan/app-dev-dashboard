import React from "react";

type IconButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className="p-1 border-2 rounded cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
