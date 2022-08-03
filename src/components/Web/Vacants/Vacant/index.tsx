import Image from "next/image";
import { RrhhJob, RrhhVacant } from "@service/graphql";
import moment from "moment";
import "moment/locale/es";

import {
  SpeakerphoneIcon,
  IdentificationIcon,
  BriefcaseIcon,
  CashIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

import IconListUI from "@components/UI/IconList";
import Description from "./Description";
import RrhhForm from "@components/Web/Vacants/Vacant/Form";
import ContainerUI from "@components/UI/Container/intex";

const Vacant = ({ vacant }: { vacant: RrhhVacant }) => {
  const {
    id,
    title,
    description: { description, benefits, salary, time },
    available: { available, date, candidates },
    jobId,
  } = vacant;
  const {
    title: titleJob,
    description: descriptionJob,
    image,
  } = jobId as RrhhJob;
  const toDate = moment(date).format("DD MMMM YYYY");
  return (
    <div>
      <div className="relative w-full h-[350px] lg:h-[400px] -mb-16 lg:-mb-24 shadow-lg rounded-b-md lg:rounded-b-2xl overflow-hidden">
        <Image
          className="object-cover"
          src={image as string}
          layout="fill"
          alt={title}
        />
      </div>
      <ContainerUI>
        <h1 className="text-3xl text-center text-primary mt-4">{title}</h1>
        <p className="text-md text-center text-gray-400">{titleJob}</p>
        <div className="flex justify-around items-center flex-col my-10 gap-y-4 lg:flex-row">
          <Description title="Descripción" content={`${descriptionJob}`} />
          <Description
            title="Jornada"
            Icon={BriefcaseIcon}
            content={`${time} hrs`}
          />
          <Description
            title="Salario"
            Icon={CashIcon}
            content={`$${salary?.toLocaleString()}`}
          />
          <Description
            title="Candidatos"
            Icon={UserGroupIcon}
            content={`${candidates} candidatos`}
          />
        </div>
        <div className="flex justify-between flex-col my-10 gap-x-2 lg:flex-row">
          <div className="w-full">
            <IconListUI
              title="Actividades"
              list={description!}
              Icon={SpeakerphoneIcon}
            />
            <IconListUI
              title="Beneficios"
              list={benefits!}
              Icon={IdentificationIcon}
            />
          </div>
          {available ? (
            <div className="w-full">
              <RrhhForm vacantId={id!} />
            </div>
          ) : null}
        </div>
        <p
          className={
            "text-center mt-10 " +
            (available ? "text-green-400" : "text-red-400")
          }
        >
          {available ? "Disponible" : "No disponible"}
          <span className="text-gray-300 font-body">
            {available ? ` hasta el ${toDate}` : ` desde el ${toDate}`}
          </span>
        </p>
      </ContainerUI>
    </div>
  );
};

export default Vacant;
