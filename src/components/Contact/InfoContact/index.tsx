type PropsInfoContact = {
  title: string;
  contact: string[];
  children: JSX.Element;
};

const InfoContact = ({ title, contact, children }: PropsInfoContact) => {
  return (
    <div className="mb-8 flex w-full max-w-[370px]">
      <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
        {children}
      </div>
      <div className="w-full">
        <h4 className="mb-1 text-xl font-bold font-body text-gray-800">
          {title}
        </h4>
        {contact.map((item, i) => {
          return (
            <p className="text-base text-gray-500" key={i}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default InfoContact;
