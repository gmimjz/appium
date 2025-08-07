import { TextareaHTMLAttributes } from "react";

type Props = {
  title: string;
  error?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({ title, error, ...props }: Props) => {
  return (
    <div className="w-full relative">
      <label className="text-black" htmlFor={props.id}>
        {title}
      </label>
      <textarea
        className="h-[192px] w-full outline-0 border-b border-black text-black text-xl"
        {...props}
      />
      <p className="absolute text-red">{error}</p>
    </div>
  );
};
