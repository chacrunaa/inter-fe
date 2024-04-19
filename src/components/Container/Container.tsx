const Container = ({
  children,
  customClass,
}: {
  children?: React.ReactNode;
  customClass?: string;
}) => {
  return <div className={customClass || 'p-3'}>{children}</div>;
};

export default Container;
