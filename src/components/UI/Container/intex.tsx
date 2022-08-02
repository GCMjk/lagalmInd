type ContainerProps = {
  children?: React.ReactNode;
};

const ContainerUI = ({ children }: ContainerProps) => (
  <div className="bg-white container mx-auto py-24 lg:py-[120px]">
    {children}
  </div>
);
export default ContainerUI;
