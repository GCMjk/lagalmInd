const GridCardUI = ({ children }: { children: JSX.Element | any }) => {
  return (
    <div className="container mx-auto flex flex-col items-stretch text-center py-32 gap-4">
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
        {children}
      </div>
    </div>
  );
};

export default GridCardUI;
