type Props = {
  number: number;
  title: string;
  children: string;
};

export const Step = ({ number, title, children }: Props) => {
  return (
    <div className="w-full flex flex-col gap-4 w-[calc(33.33%-21.33px)] md:w-[calc(33.33%-10.67px)]">
      <div className="bg-turquoise p-4 flex flex-col gap-2 rounded-xl">
        <p>{number}</p>
        <p className="text-xl font-bold">{title}</p>
      </div>
      <p>{children}</p>
    </div>
  );
};
