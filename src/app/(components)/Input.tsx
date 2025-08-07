import { InputHTMLAttributes } from "react";

type Props = {
  title: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ title, error, ...props }: Props) => {
  return (
    <div className="w-full relative">
      <label className="text-black" htmlFor={props.id}>
        {title}
      </label>
      <input
        type="text"
        className="w-full outline-0 border-b border-black text-black text-xl"
        {...props}
      />
      <p className="absolute text-red">{error}</p>
    </div>
  );
};
