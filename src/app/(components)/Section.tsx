import { Wrapper } from "@/app/(components)/Wrapper";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  isHorizontal?: boolean;
  children: React.ReactNode;
};

export const Section = ({ title, isHorizontal = false, children }: Props) => {
  return (
    <Wrapper>
      <div
        className={twMerge(
          "gap-8 flex justify-between",
          isHorizontal && "flex-col lg:flex-row",
          !isHorizontal && "flex-col"
        )}
      >
        <p className="font-bold text-4xl sm:text-5xl">{title}</p>
        <div className={twMerge("w-full", isHorizontal && "lg:max-w-3xl")}>
          {children}
        </div>
      </div>
    </Wrapper>
  );
};
