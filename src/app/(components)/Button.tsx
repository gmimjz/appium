import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: string;
  isBlack?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, isBlack, ...props }: Props) => {
  return (
    <button
      className={twMerge(
        "font-medium h-8 px-12 bg-white text-black rounded-full cursor-pointer hover:bg-black hover:text-white duration-500 border border-white",
        isBlack &&
          "bg-black text-white hover:bg-white hover:text-black border border-black"
      )}
      {...props}
    >
      {children}
    </button>
  );
};
