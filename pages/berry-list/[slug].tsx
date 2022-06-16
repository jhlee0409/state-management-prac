import { dehydrate, QueryClient } from "react-query";
import { getPokes } from "@/apis/pokeApi";
import BerryList from "@/components/berryList";

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("poke-list", () => getPokes(), {
    staleTime: 10000,
  });
  const dehydratedState = dehydrate(queryClient);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydratedState)),
    },
  };
};

const pokeListPage = () => {
  return <BerryList />;
};

export default pokeListPage;
