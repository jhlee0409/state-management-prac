import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getRegions } from "@/apis/regionAPi";
import ListLayout from "../layout/ListLayout";
import List from "../libs/List";

const RegionList = () => {
  const router = useRouter();
  const slug = +router.query.slug!;
  const { data, isLoading } = useQuery<any>(["region-list", slug], () =>
    getRegions(slug)
  );
  if (isLoading) return <p>로딩중</p>;
  return (
    <ListLayout title="region" count={data.count}>
      <List data={data.results} />
    </ListLayout>
  );
};

export default RegionList;
