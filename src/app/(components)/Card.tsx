import { Color } from "@/app/(utils)/enums";

type Props = {
  color: Color;
  title: string;
  children: string;
  onHover?: () => void;
  onLeave?: () => void;
};

export const Card = ({
  color,
  title,
  children,
  onHover = () => {},
  onLeave = () => {},
}: Props) => {
  return (
    <div
      className={`overflow-hidden rounded-xl bg-${color} text-black p-4 lg:h-[280px] flex justify-end flex-col gap-2 group cursor-pointer lg:w-[20%]`}
      onMouseEnter={() => onHover()}
      onMouseLeave={() => onLeave()}
    >
      <p className="font-bold text-xl">{title}</p>
      <p className="group-hover:opacity-100 group-hover:max-h-40 duration-750 lg:opacity-0 lg:max-h-0">
        {children}
      </p>
    </div>
  );
};
