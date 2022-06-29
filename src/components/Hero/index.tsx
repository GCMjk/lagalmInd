import Image from "next/image";
import RightImg from "@assets/img/hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center overflow-hidden py-32 bg-white lg:py-0 lg:h-[85vh] lg:bg-cover lg:bg-center lg:bg-no-repeat"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* left side */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <p className="text-secondary mb-[22px] text-md lg:text-lg">
              Lorem ipsum dolor sit.
            </p>
            <h1 className="text-primary font-bold text-4xl leading-[44px] md:text-5xl md:leading-tight md:tracking-[-2px] lg:text-7xl lg:leading-[1.2]">
              Lorem ipsum dolor. <br /> Lorem, ipsum.
            </h1>
            <p className="text-lg pt-4 pb-8 max-w-[480px] md:pt-6 md:pb-12">
              Lorem ipsum dolor sit amet consectetur adipisicing illo ad labore
              dolor elit.
            </p>
            <button className="btn md:btn--md lg:btn--lg btn--hover">
              Lorem, ipsum.
            </button>
          </div>
          {/* right side */}
          <div className="hidden flex-1 justify-end items-end h-full lg:flex">
            <Image src={RightImg} height={561} width={423} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
