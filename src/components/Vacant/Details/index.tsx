import moment from "moment";
import "moment/locale/es";
import Image from "next/image";
import { RrhhVacant } from "@service/graphql";

const VacantDetails = ({ item }: { item: Object }) => {
  const vacant = item as RrhhVacant;
  const { title, description, jobId, available, details } = vacant;
  const { title: tilteJob, description: descriptionJob, image } = jobId;
  const { creationDate } = details;
  const imageJob = image as string;
  const date = moment(creationDate).format("MMM DD YYYY");
  return (
    <div className="border border-gray-500 flex">
      <Image
        className="rounded-t-sm rounded-b-xl"
        src={imageJob}
        height={300}
        width={300}
        alt={title}
      />
      <div className="p-5">
        <p className="text-5xl">{title}</p>
        <div className="pl-3 flex justify-between">
          <div>
            <p className="text-sm text-gray-500"> {tilteJob} </p>
            <p className="text-xs text-gray-400"> {descriptionJob} </p>
          </div>
          <div>
            <p className="text-xs text-gray-400">{date}</p>
          </div>
        </div>
        <p className="mt-5">{description} </p>
      </div>
    </div>
  );
};

export default VacantDetails;
