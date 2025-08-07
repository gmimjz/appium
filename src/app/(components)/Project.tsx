import Image from "next/image";
import { twMerge } from "tailwind-merge";

type Props = {
  type: string;
  imageUrl: string;
  title: string;
  children: string;
  isLast?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
};

export const Project = ({
  type,
  imageUrl,
  title,
  children,
  isLast,
  onHover = () => {},
  onLeave = () => {},
}: Props) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-4 relative border p-4 md:p-8 border-gray group hover:bg-white duration-500 transition-colors cursor-none",
        !isLast && "border-b-0 lg:border-b lg:border-r-0"
      )}
      onMouseEnter={() => onHover()}
      onMouseLeave={() => onLeave()}
    >
      <p className="absolute top-8 left-8 md:top-12 md:left-12 text-black bg-white rounded-full h-8 flex justify-center items-center px-4">
        {type}
      </p>
      <Image
        src={imageUrl}
        alt={`${title} project image`}
        width={1920}
        height={1080}
        className="w-full h-auto"
      />
      <p className="text-xl font-bold group-hover:text-black duration-500 transition-colors">
        {title}
      </p>
      <p className="group-hover:text-black transition-colors duration-500">
        {children}
      </p>
    </div>
  );
};
