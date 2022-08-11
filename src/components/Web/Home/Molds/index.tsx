import Image from "next/image";

const Molds = () => {
  return (
    <div className="pb-16 bg-gradient-to-r from-secondary to-tertiary lg:pb-0 lg:z-10 lg:relative my-32">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="relative lg:-my-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
          />
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
            <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-2xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
              <div className="relative lg:h-full lg:w-full">
                <Image
                  layout="fill"
                  className="object-cover"
                  src="https://res.cloudinary.com/lagalm/image/upload/v1660178186/lagalm_6_lfe7mi.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
            <blockquote>
              <div>
                <p className="mt-6 text-xl lg:text-3xl font-medium text-white">
                  Brindamos soluciones integrales, desde el diseño de un
                  producto, hasta la entrega en la puerta de la planta del
                  cliente.
                </p>
              </div>
              <footer className="mt-8">
                <p className="text-base font-medium text-white">
                  A través del tiempo, adquirimos la experiencia para
                  desarrollar en conjunto a nuestros clientes, productos de alto
                  valor para ellos. Se comprende un desarrollo de una idea, a
                  llevarla traducirla en productos útiles.
                </p>
                <p className="text-base font-medium text-cyan-100 mt-4">
                  Desde los bosquejos artísticos hasta la manufactura de
                  plásticos o metálicas con especificaciones que cumplan los
                  requerimientos de ingeniería del cliente. Elaboración de
                  líneas de manufactura y establecimientos de líneas de
                  suministro de productos.
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Molds;
