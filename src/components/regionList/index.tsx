import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getRegions } from "@/apis/regionAPi";
import ListLayout from "../layout/ListLayout";
import ListLink from "../libs/ListLink";

const RegionList = () => {
  const router = useRouter();
  const slug = +router.query.slug!;
  const { data, isLoading } = useQuery<any>(["region-list", slug], () =>
    getRegions(slug)
  );
  if (isLoading) return <p>로딩중</p>;
  return (
    <ListLayout title="REGION" count={data.count}>
      {data?.results?.map((item: { name: string; url: string }) => {
        return <ListLink key={item.name} data={item} />;
      })}
    </ListLayout>
  );
};

export default RegionList;
