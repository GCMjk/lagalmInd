import TitleGridUI from "./Title";

type GridProps = {
  title?: string;
  sub?: string;
  description?: string;
  children: JSX.Element | any;
};

const GridUI = ({
  title = "",
  sub = "",
  description = "",
  children,
}: GridProps) => {
  return (
    <>
      <TitleGridUI title={title} sub={sub}>
        {description}
      </TitleGridUI>
      <div className="flex flex-col items-stretch text-center gap-4">
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
          {children}
        </div>
      </div>
    </>
  );
};

export default GridUI;
