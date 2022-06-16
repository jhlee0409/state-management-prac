import Poke from "@/components/poke";
import { dehydrate, QueryClient } from "react-query";
import { getBerry } from "@/apis/barryApi";
import Berry from "@/components/berry";

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("berry", () => getBerry(1), {
    staleTime: 1000,
  });
  const dehydratedState = dehydrate(queryClient);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydratedState)),
    },
  };
};

const BerryPage = () => {
  return <Berry />;
};

export default BerryPage;
