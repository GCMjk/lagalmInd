type PropsDescription = {
  title: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  content: string;
};
const Description = ({ title, Icon, content }: PropsDescription) => {
  return (
    <div className="flex flex-col">
      <span className="text-xs text-gray-300 tracking-wider text-center">
        {title}
      </span>
      <p className="flex items-center">
        {Icon ? <Icon className="h-4 mr-2 text-secondary" /> : null} {content}
      </p>
    </div>
  );
};

export default Description;
