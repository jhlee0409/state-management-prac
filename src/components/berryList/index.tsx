import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { pokeListWrapper, pokeNameLinkBox } from "./style.css";
import { getBerries } from "@/apis/barryApi";
import PagingButtons from "../libs/PagingButtons";
import ListLayout from "../layout/ListLayout";

const BerryList = () => {
  const router = useRouter();
  const slug = +router.query.slug!;
  const { data, isLoading } = useQuery<any>(["berry-list", slug], () =>
    getBerries(slug)
  );
  if (isLoading) return <p>로딩중</p>;
  return (
    <ListLayout title="BERRY" count={data.count}>
      {data?.results?.map(
        (item: { name: string; url: string }, index: number) => {
          return (
            <Link key={item.name} href={`${item.url.split("v2")[1]}`}>
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

export default BerryList;
