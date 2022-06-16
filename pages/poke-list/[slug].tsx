import PokeList from "@/components/pokeList";
import { dehydrate, QueryClient } from "react-query";
import { getPokes } from "@/apis/pokeApi";
import { getBerries } from "@/apis/barryApi";

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("berry-list", () => getBerries(), {
    staleTime: 1000,
  });
  const dehydratedState = dehydrate(queryClient);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydratedState)),
    },
  };
};

const BerryListPage = () => {
  return <PokeList />;
};

export default BerryListPage;
