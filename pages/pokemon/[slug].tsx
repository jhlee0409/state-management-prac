import Poke from "@/components/poke";
import { dehydrate, QueryClient } from "react-query";
import { getPoke } from "@/apis/pokeApi";

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("poke", () => getPoke(1), {
    staleTime: 1000,
  });
  const dehydratedState = dehydrate(queryClient);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydratedState)),
    },
  };
};

const PokePage = () => {
  return <Poke />;
};

export default PokePage;
