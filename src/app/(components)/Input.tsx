import { InputHTMLAttributes } from "react";

type Props = {
  title: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ title, error, ...props }: Props) => {
  return (
    <div className="w-full relative">
      <p className="text-black">{title}</p>
      <input
        type="text"
        className="w-full outline-0 border-b border-black text-black text-xl"
        {...props}
      />
      <p className="absolute text-red">{error}</p>
    </div>
  );
};
