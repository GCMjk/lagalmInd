import Image from "next/image";
import { PencilIcon } from "@heroicons/react/solid";

const Manufacture = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Servicios
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl uppercase">
              LAGALM INDUSTRIAL S.A DE C.V.,
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <Image
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="https://res.cloudinary.com/lagalm/image/upload/v1660161889/Servicios_pleu0n.jpg"
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <PencilIcon
                    className="flex-none w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">Proceso de diseño</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                ofrece soluciones y servicios de manufactura especializados en
                el área de moldeo por inyección de resinas termoplásticas,
                soportado en procesos robustos de ingeniera y empleo de
                tecnologías recientes, con el fin de garantizar que los
                requerimientos y especificaciones en los productos que establece
                el cliente sean satisfechos, a través de un análisis y
                evaluación de procesos, aplicando una mejora continua en
                nuestros procedimientos, generando productos de alto valor para
                el cliente.{" "}
                <span className="font-semibold font-body">
                  Empleamos herramientas de diseño CAD
                </span>
                , aplicadas en el diseño de productos plásticos o metálicos.
                Construimos herramientas con procesos de{" "}
                <span className="font-semibold font-body">
                  manufactura convencionales y tecnologías CAD/CAM
                </span>
                , contamos con un equipo de técnicos con especialidad en el
                ramo.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <ul role="list">
                <li>
                  - Moldeo por inyección de resinas plásticas. Moldeo por
                  soplado de resinas plásticas.
                </li>
                <li>- Moldeo por Fundición a presión.</li>
                <li>- Fabricación moldes para inyección de plástico.</li>
                <li>- Fabricación moldes para fundición a presión.</li>
                <li>- Fabricación moldes para soplado.</li>
                <li>- Fabricación Troqueles progresivos.</li>
                <li>- Soldadura por ultrasonido de partes plásticas.</li>
                <li>
                  - Fabricación de piezas mecanizadas plásticas o metálicas en
                  serie.
                </li>
                <li>- Escaneo de piezas 3D con mapeo de medidas crÍticas.</li>
                <li>
                  - Decorado e impresión, por hot stamping, laser o inyección de
                  tinta.
                </li>
                <li>
                  - Procesos de trazabilidad e identificación con grabado laser
                  o inyección de tinta.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacture;
