import Image from "next/image";
import ButtonUI, { Style, Size } from "@components/UI/Button";

export type Color = "Green" | "Red" | "Yellow" | "Blue";

type PropsCardUI = {
  disabled: boolean;
  image: string;
  badget?: {
    color: Color;
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

const CardUI = ({
  disabled,
  image,
  badget,
  title,
  description,
  button,
}: PropsCardUI) => {
  return (
    <div
      className={
        "bg-white text-gray-700 w-full min-h-[10rem] shadow-lg rounded-md overflow-hidden" +
        (disabled ? "" : " opacity-50 cursor-default")
      }
    >
      <div className="relative w-full h-[200px] lg:h-[300px]">
        <Image
          className="object-cover"
          src={`${image}`}
          layout="fill"
          alt={title}
        />
      </div>
      <div className="p-5 flex flex-col gap-5">
        {badget ? (
          <div>
            <span
              className={
                "px-3 py-1 rounded-full tracking-wider uppercase text-xs bg-gray-100/60 border " +
                (badget.color === "Green"
                  ? " text-green-500 border-green-300"
                  : badget.color === "Red"
                  ? " text-red-500 border-red-300"
                  : badget.color === "Yellow"
                  ? " text-yellow-500 border-yellow-300"
                  : badget.color === "Blue"
                  ? " text-blue-500 border-blue-300"
                  : "")
              }
            >
              {badget?.text}
            </span>
          </div>
        ) : null}

        <h2 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap">
          {title}
        </h2>
        <p className="text-base text-gray-600 line-clamp-2 h-12">
          {description}
        </p>
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
