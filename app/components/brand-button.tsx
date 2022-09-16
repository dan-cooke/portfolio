import { HTMLAttributes } from "react";

export const BrandButton: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}) => {
  return (
    <div className={"hover:cursor-pointer rounded-full p-2 " + className}>
      {children}
    </div>
  );
};
