import { useRouter } from "next/router";
import VacantDetails from "@components/Vacant/Details";
import {
  GetVacantDocument,
  GetVacantsDocument,
  Vacant,
  VacantFragment,
} from "@service/graphql";
import client from "@service/client";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import RrhhForm from "@components/Forms/Rrhh";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await client.query({ query: GetVacantsDocument });
  const data = response.data.vacants?.vacants;

  const paths = data?.map((vacant, index) => {
    if (vacant == null) {
      throw new Error(
        `An avocado entry with no data was found at index ${index}`
      );
    }

    return { params: { id: vacant.id } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<{
  vacant: VacantFragment;
}> = async ({ params }) => {
  try {
    const response = await client.query({
      query: GetVacantDocument,
      variables: { vacantId: params?.id as string },
    });

    if (!response.data.vacant?.status) {
      return {
        props: {
          vacants: {},
        },
      };
    }

    const vacant = response.data.vacant.vacant as Vacant;

    return {
      props: {
        vacant,
      },
    };
  } catch (e) {
    return {
      props: {
        vacants: {},
      },
    };
  }
};

const Vacant = ({ vacant }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    query: { id },
  } = useRouter();

  return (
    <>
      <VacantDetails vacant={vacant} />
      <RrhhForm idVacant={`${id}`} />
    </>
  );
};

export default Vacant;
