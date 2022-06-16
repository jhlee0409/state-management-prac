import { dehydrate, QueryClient } from "react-query";
import { getRegions } from "@/apis/regionAPi";
import RegionList from "@/components/regionList";

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("region-list", () => getRegions(), {
    staleTime: 10000,
  });
  const dehydratedState = dehydrate(queryClient);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydratedState)),
    },
  };
};

const RegionListPage = () => {
  return <RegionList />;
};

export default RegionListPage;
