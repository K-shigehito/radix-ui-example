type Props = {
  children: React.ReactNode;
  title: string;
};

export const LayoutWrapper = ({ children, title }: Props) => {
  return (
    <div className='w-60'>
      <h2 className='mb-4 flex items-center gap-2 text-xl font-bold before:content-["・"]'>
        {title}
      </h2>
      {children}
    </div>
  );
};
