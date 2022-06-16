import { dehydrate, QueryClient } from "react-query";
import Region from "@/components/region";
import { getRegion } from "@/apis/regionAPi";

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("region", () => getRegion(1), {
    staleTime: 1000,
  });
  const dehydratedState = dehydrate(queryClient);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydratedState)),
    },
  };
};

const RegionPage = () => {
  return <Region />;
};

export default RegionPage;
