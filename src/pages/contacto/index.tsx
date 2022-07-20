import SalesForm from "@components/Forms/Sales";
import Socials from "@components/Socials";

const Contact = () => {
  return (
    <section className="container mx-auto min-h-[800px] mt-[110px] bg-white rounded-md p-10">
      <div className="flex flex-col justify-center items-center gap-6 lg:flex-row">
        <div className="w-full lg:w-1/2 space-y-12">
          <div className="flex flex-col">
            <p className="text-3xl font-semibold">
              Contactanos, un asesor te atendera
            </p>
            <h3 className="text-lg ml-2 text-slate-400">
              ¿Interesado en conocer más sobre nuestros servicios? Nuestros
              equipo se toman el tiempo para resolver sus dudas.
            </h3>
          </div>
          <div className="w-full h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.9709743262897!2d-99.12847454913846!3d19.628538639406433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f5b3f950aa5d%3A0x782921184d3d77e3!2sLagalm%20Industrial%2C%20S.A.%20de%20C.V.!5e0!3m2!1ses!2smx!4v1656373561284!5m2!1ses!2smx"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <Socials bg />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <SalesForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
