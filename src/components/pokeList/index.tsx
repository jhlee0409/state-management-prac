import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getPokes } from "@/apis/pokeApi";
import ListLayout from "../layout/ListLayout";
import ListLink from "../libs/ListLink";

const PokeList = () => {
  const router = useRouter();
  const slug = +router.query.slug!;
  const { data, isLoading } = useQuery<any>(["poke-list", slug], () =>
    getPokes(slug)
  );
  if (isLoading) return <p>로딩중</p>;
  return (
    <ListLayout count={data.count} title="POKE">
      {data?.results?.map((item: { name: string; url: string }) => {
        return <ListLink data={item} key={item.name} />;
      })}
    </ListLayout>
  );
};

export default PokeList;
