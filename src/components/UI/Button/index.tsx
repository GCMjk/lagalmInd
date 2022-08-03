import Link from "next/link";

export type Style = "Basic" | "Outline" | "White";
export type Size = "Small" | "Medium" | "Large";

type PropsButtonUI = {
  linkButton?: string;
  style?: Style;
  size: Size;
  children: string;
};

const ButtonUI = ({
  linkButton,
  style = "Basic",
  size,
  children,
}: PropsButtonUI) => {
  return (
    <Link href={linkButton || ""}>
      <a
        className={
          "flex flex-grow items-center justify-center h-[42px] py-2 px-4 rounded-md shadow-xl font-medium transition-all duration-300" +
          (style === "Basic"
            ? " text-white bg-tertiary hover:bg-accent-hover"
            : style === "Outline"
            ? " text-tertiary bg-white border border-tertiary hover:text-white hover:bg-tertiary hover:border-tertiary"
            : " text-tertiary bg-white shadow-inherit cursor-default") +
          (size === "Small"
            ? " h-[28px] lg:h-[38px] shadow-md"
            : size === "Medium"
            ? " h-[34px] lg:h-[44px] shadow-lg"
            : " h-[40px] lg:h-[50px] shadow-xl")
        }
      >
        {children}
      </a>
    </Link>
  );
};
export default ButtonUI;
