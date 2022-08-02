import IconListUI from "@components/UI/IconList";
import SalesForm from "@components/Contact/Sales";
import ContainerUI from "@components/UI/Container/intex";

import {
  OfficeBuildingIcon,
  PhoneIcon,
  InboxIcon,
} from "@heroicons/react/outline";

const Contacto = () => {
  return (
    <ContainerUI>
      <div className="-mx-4 flex flex-wrap lg:justify-between">
        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
          <div className="mb-12 max-w-[570px] lg:mb-0">
            <h2 className="mb-2 text-[34px] font-bold uppercase lg:text-[30px] text-gray-700">
              Rellena la informacion del formulario
            </h2>
            <p className="mb-10 text-base leading-relaxed text-body-color">
              Brindandonos tus datos, haremos el proceso de contacto mas rapido
              o tambien puedes encontrarnos en los siguientes medios
            </p>

            <IconListUI
              title="Dirección"
              list={["Insurgentes #23, Col. Sta. Maria Cuautepec, 54949 Méx."]}
            >
              <OfficeBuildingIcon className="h-10" />
            </IconListUI>

            <IconListUI
              title="Telefono"
              list={["55 4422-2211", "55 0101-0202"]}
            >
              <PhoneIcon className="h-10" />
            </IconListUI>

            <IconListUI
              title="Correo"
              list={["contacto@lagalm.mx", "ventas@lagalm.mx"]}
            >
              <InboxIcon className="h-10" />
            </IconListUI>
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
          <SalesForm />
        </div>
      </div>
    </ContainerUI>
  );
};

export default Contacto;
