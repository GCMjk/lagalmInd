import Image from "next/image";

const Manufacture = () => {
  const metrics = [
    {
      id: 1,
      stat: "",
      emphasis: "",
      rest: "PC",
    },
    {
      id: 2,
      stat: "",
      emphasis: "",
      rest: "PA",
    },
    {
      id: 3,
      stat: "",
      emphasis: "",
      rest: "POM",
    },
    {
      id: 4,
      stat: "",
      emphasis: "",
      rest: "PBT",
    },
    {
      id: 5,
      stat: "",
      emphasis: "",
      rest: "ABS",
    },
    {
      id: 6,
      stat: "",
      emphasis: "",
      rest: "Poliuretanos",
    },
    {
      id: 7,
      stat: "",
      emphasis: "",
      rest: "Acrilatos",
    },
    {
      id: 8,
      stat: "",
      emphasis: "",
      rest: "Con cargas aditivas como puede ser fibra de vidrio o talco",
    },
    {
      id: 9,
      stat: "",
      emphasis: "",
      rest: "Retardantes a la flama, aditiva resistencia a rayos UV",
    },
    {
      id: 10,
      stat: "",
      emphasis: "",
      rest: "Sobre moldeo con insertos metálicos o plásticos",
    },
  ];
  return (
    <div className="relative bg-gray-900 my-8">
      <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <div className="relative h-full w-full">
              <Image
                layout="fill"
                className="object-cover opacity-25 xl:absolute xl:inset-0 border"
                src="https://res.cloudinary.com/lagalm/image/upload/v1660177455/lagalm_4_nqetpb.jpg"
                alt="People working on laptops"
              />
            </div>

            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold tracking-wide uppercase">
            <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
              Manufactura de productos plásticos
            </span>
          </h2>
          <p className="mt-4 text-3xl font-extrabold text-white">
            Ofrecemos manufactura de productos a través del moldeo de resinas
            termoplásticas.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            Contamos con un seguimiento y gestión de nuestros procesos,
            brindando precisión y repetibilidad en los procesos de inyección.
          </p>
          <p className="mt-8 text-lg text-gray-300">
            Manejo especializado de resina de ingeniería:
          </p>
          <div className="my-8 grid grid-cols-1 gap-y-8 gap-x-4 sm:grid-cols-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-base text-gray-300">
                  - {item.rest}
                </span>
              </p>
            ))}
          </div>
          <p className="pt-8 text-lg text-gray-300">
            <span className="font-bold font-body">
              Nuestra capacidad de inyección
            </span>{" "}
            va desde pequeñas partes de 1 gramo hasta fabricación de partes
            grandes de más de 3,000 gramos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Manufacture;
