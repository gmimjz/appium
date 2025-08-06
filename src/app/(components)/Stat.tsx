import CountUp from "react-countup";

type Props = {
  stat: number;
  description: string;
};

export const Stat = ({ stat, description }: Props) => {
  return (
    <div>
      <CountUp
        start={0}
        end={stat}
        enableScrollSpy={true}
        scrollSpyOnce={true}
        scrollSpyDelay={0}
      >
        {({ countUpRef }) => (
          <p className="text-5xl font-bold">
            <span ref={countUpRef}>{stat}</span>+
          </p>
        )}
      </CountUp>
      <p>{description}</p>
    </div>
  );
};
