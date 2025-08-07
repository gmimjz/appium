import { VscAdd } from "react-icons/vsc";
import { twMerge } from "tailwind-merge";

type Props = {
  question: string;
  isOpen: boolean;
  onClick: () => void;
  children: string;
};

export const Question = ({ question, isOpen, onClick, children }: Props) => {
  return (
    <div onClick={() => onClick()}>
      <div className="h-12 flex justify-between items-center">
        <p className="text-xl font-bold">{question}</p>
        <div className={twMerge("duration-500", isOpen && "rotate-45")}>
          <VscAdd size={24} />
        </div>
      </div>
      <div
        className={twMerge(
          "overflow-hidden duration-500 max-h-0 h-full",
          isOpen && "max-h-40 pb-4"
        )}
      >
        {children}
      </div>
    </div>
  );
};
