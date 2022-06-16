import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getBerries } from "@/apis/barryApi";
import ListLayout from "../layout/ListLayout";
import ListLink from "../libs/ListLink";

const BerryList = () => {
  const router = useRouter();
  const slug = +router.query.slug!;
  const { data, isLoading } = useQuery<any>(["berry-list", slug], () =>
    getBerries(slug)
  );
  if (isLoading) return <p>로딩중</p>;
  return (
    <ListLayout title="BERRY" count={data.count}>
      {data?.results?.map((item: { name: string; url: string }) => {
        return <ListLink data={item} key={item.name} />;
      })}
    </ListLayout>
  );
};

export default BerryList;
