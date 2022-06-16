import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getPokes } from "@/apis/pokeApi";
import { pokeListWrapper, pokeNameLinkBox } from "./style.css";
import PagingButtons from "../libs/PagingButtons";

const PokeList = () => {
  const router = useRouter();
  const slug = +router.query.slug!;
  const { data, isLoading } = useQuery<any>(["poke-list", slug], () =>
    getPokes(slug)
  );
  if (isLoading) return <p>로딩중</p>;
  return (
    <div>
      <h1>{`< POKE LIST >`}</h1>
      <p>{data.count}</p>
      <p>{`${slug + 1} - ${slug + 20}`}</p>
      <PagingButtons url="poke-list" offset={20} />
      <div className={pokeListWrapper}>
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
      </div>
    </div>
  );
};

export default PokeList;
