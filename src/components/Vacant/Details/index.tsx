import { VacantFragment } from "@service/graphql";

type VacantProps = {
  vacant: VacantFragment;
};

const VacantDetails = ({ vacant }: VacantProps) => {
  const { title } = vacant;
  return (
    <>
      <p>Vacante {title} </p>
    </>
  );
};

export default VacantDetails;
