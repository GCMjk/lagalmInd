type TitleProps = {
  title: string;
  sub: string;
  children: React.ReactNode;
};
const TitleGridUI = ({ title, sub, children }: TitleProps) => (
  <div className="mx-auto mb-[40px] max-w-[800px] text-center">
    <span className="mb-2 block text-lg font-semibold text-primary">
      {title}
    </span>
    <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] text-gray-700">
      {sub}
    </h2>
    <p className="text-base">{children}</p>
  </div>
);

export default TitleGridUI;
