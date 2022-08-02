type PropsIconList = {
  title: string;
  list: object;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const IconListUI = ({ title, list, Icon }: PropsIconList) => {
  const listValues = Object.values(list);
  return (
    <div className="flex w-full my-6">
      <div className="flex items-center justify-center h-full w-auto overflow-hidden p-4 mr-6 rounded bg-primary bg-opacity-10 text-primary">
        <Icon className="h-10" />
      </div>
      <div className="w-full">
        <h4 className="mb-1 text-xl font-bold text-gray-800">{title}</h4>
        {listValues.map((item, i) => {
          return (
            <p className="text-base text-gray-500 my-1" key={i}>
              - {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default IconListUI;
