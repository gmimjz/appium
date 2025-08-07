import { twMerge } from "tailwind-merge";

type Props = {
  number: number;
  title: string;
  isDown?: boolean;
  children: string;
};

export const Step = ({ number, title, isDown, children }: Props) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-2 border border-gray p-4 md:p-8 border-b-0 md:border-r-0 last:border-r md:w-[33.33%]",
        isDown && "md:border-b last:border-b"
      )}
    >
      <div className="flex flex-col gap-2 rounded-xl">
        <p className="text-xl">{number}</p>
        <p className="text-3xl font-bold">{title}</p>
      </div>
      <p>{children}</p>
    </div>
  );
};
