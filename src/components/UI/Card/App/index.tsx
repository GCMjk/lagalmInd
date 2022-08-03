import ButtonUI from "@UI/Button";
import InputSearchUI from "@UI/InputSearch";

const CardUI = ({
  title,
  description,
  addButton,
  linkButton,
  inputSearch,
  children,
}: {
  title: string;
  description?: string;
  addButton?: string;
  linkButton?: string;
  inputSearch?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="border shadow bg-white rounded-lg p-4">
      <div className="flex justify-between pb-4 border-b border-gray-100">
        <div className="flex flex-col">
          <h2 className="text-primary font-bold text-3xl">{title}</h2>
          <p className="mt-1 text-gray-400 text-sm tracking-wide">
            {description}
          </p>
        </div>
        <div className="hidden lg:flex justify-between items-center gap-x-4 md:w-1/2">
          {inputSearch ? (
            <InputSearchUI toSearch={inputSearch} />
          ) : (
            <div className="w-full"></div>
          )}
          {addButton ? (
            <div className="w-[50%]">
              <ButtonUI linkButton={linkButton || ""} size="Small">
                {addButton}
              </ButtonUI>
            </div>
          ) : null}
        </div>
      </div>
      {children}
    </div>
  );
};

export default CardUI;
