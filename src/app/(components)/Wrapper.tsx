type Props = {
  children: React.ReactNode;
};

export const Wrapper = ({ children }: Props) => {
  return (
    <div className="w-full px-4 lg:px-8 max-w-7xl mx-auto">{children}</div>
  );
};
