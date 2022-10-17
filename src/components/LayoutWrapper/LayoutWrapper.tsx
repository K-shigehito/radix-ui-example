type Props = {
  children: React.ReactNode;
  title: string;
};

export const LayoutWrapper = ({ children, title }: Props) => {
  return (
    <div className='w-60'>
      <h2 className='mb-4 text-xl font-bold'>{title}</h2>
      <div>{children}</div>
    </div>
  );
};
