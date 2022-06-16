import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getPokes } from "@/apis/pokeApi";
import ListLayout from "../layout/ListLayout";
import ListLink from "../libs/ListLink";
import List from "../libs/List";

const PokeList = () => {
  const router = useRouter();
  const slug = +router.query.slug!;
  const { data, isLoading } = useQuery<any>(["poke-list", slug], () =>
    getPokes(slug)
  );
  if (isLoading) return <p>로딩중</p>;
  return (
    <ListLayout count={data.count} title="poke">
      <List data={data.results} />
    </ListLayout>
  );
};

export default PokeList;
