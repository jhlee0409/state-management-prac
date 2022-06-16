import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getPokes } from "@/apis/pokeApi";
import { pokeNameLinkBox } from "./style.css";
import ListLayout from "../layout/ListLayout";

const PokeList = () => {
  const router = useRouter();
  const slug = +router.query.slug!;
  const { data, isLoading } = useQuery<any>(["poke-list", slug], () =>
    getPokes(slug)
  );
  if (isLoading) return <p>로딩중</p>;
  return (
    <ListLayout count={data.count} title="POKE">
      {data?.results?.map(
        (item: { name: string; url: string }, index: number) => {
          return (
            <Link
              key={item.name}
              href={`/poke/${item.url.split("pokemon/")[1]}`}
            >
              <a className={pokeNameLinkBox}>
                <span>{`${slug + index + 1}.`}</span>
                <h3>{item.name}</h3>
              </a>
            </Link>
          );
        }
      )}
    </ListLayout>
  );
};

export default PokeList;
