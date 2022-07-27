import Image from "next/image";
import ButtonUI, { Style, Size } from "@components/UI/Button";

type PropsCardUI = {
  image: string;
  badget?: {
    color: string;
    text: string;
  };
  title: string;
  description: string;
  button: {
    style: Style;
    size: Size;
    text: string;
    link: string;
  };
};

const CardUI = ({ image, badget, title, description, button }: PropsCardUI) => {
  return (
    <div className="bg-white text-gray-700 w-full min-h-[10rem] shadow-lg rounded-md overflow-hidden">
      <div className="relative w-full h-[200px] lg:h-[300px]">
        <Image
          className="object-cover"
          src={`${image}`}
          layout="fill"
          alt={title}
        />
      </div>
      <div className="p-5 flex flex-col gap-2 lg:p-6">
        {badget ? (
          <div className="mb-2">
            <span
              className={`px-3 py-1 rounded-full tracking-wider uppercase text-xs bg-gray-100/60 border border-${badget?.color}-300 text-${badget?.color}-500`}
            >
              {badget?.text}
            </span>
          </div>
        ) : null}

        <h2 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap">
          {title}
        </h2>
        <p className="my-3 text-sm text-gray-600 line-clamp-2">{description}</p>
        {button ? (
          <div className="flex justify-around gap-2">
            <ButtonUI
              size={button.size}
              style={button.style}
              linkButton={button.link}
            >
              {button.text}
            </ButtonUI>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CardUI;
