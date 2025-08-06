import { VscQuote } from "react-icons/vsc";

type Props = {
  name: string;
  company: string;
  children: string;
};

export const Review = ({ name, company, children }: Props) => {
  return (
    <div className="bg-pink p-4 rounded-xl flex flex-col gap-4">
      <VscQuote size={24} />
      <p className="font-bold text-xl">
        {'"'}
        {children}
        {'"'}
      </p>
      <div>
        <p className="font-bold">{name}</p>
        <p>{company}</p>
      </div>
    </div>
  );
};
