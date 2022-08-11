import Image from "next/image";
import RightImg from "@assets/img/hero.png";
import ButtonUI from "@components/UI/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center overflow-hidden bg-hero bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto h-screen -mb-28">
        <div className="flex items-center h-full">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left backdrop-blur-sm bg-white/30 px-10 py-20 rounded-md">
            <h1 className="text-primary font-medium text-2xl leading-[34px] md:leading-tight md:tracking-[-2px] lg:text-3xl lg:leading-[1.4] uppercase">
              Expertos en manufactura de <br />
              <span className="text-paragraph font-bold text-4xl leading-[44px] md:text-5xl md:leading-tight md:tracking-[-2px] lg:text-7xl">
                productos plasticos y metalicos
              </span>
            </h1>
            <p className="text-2xl pt-4 pb-8 max-w-[480px] md:pt-6 md:pb-10">
              empresa enfocada en el diseño, desarrollo y manufactura de partes
              plásticas.
            </p>
            <ButtonUI linkButton="/contacto" size="Large">
              Conocenos
            </ButtonUI>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
