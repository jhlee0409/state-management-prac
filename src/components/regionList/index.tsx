import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { pokeListWrapper, pokeNameLinkBox } from "./style.css";
import PagingButtons from "../libs/PagingButtons";
import { getRegions } from "@/apis/regionAPi";

const RegionList = () => {
  const router = useRouter();
  const slug = +router.query.slug!;
  const { data, isLoading } = useQuery<any>(["region-list", slug], () =>
    getRegions(slug)
  );
  console.log(data);
  if (isLoading) return <p>로딩중</p>;
  return (
    <div>
      <h1>{`< REGION LIST >`}</h1>
      <p>{data.count}</p>
      <p>{`${slug + 1} - ${slug + 20}`}</p>
      <PagingButtons
        url="region-list"
        offset={20}
        disableNext={data.count <= slug + 20}
        disablePrev={0 >= slug}
      />
      <div className={pokeListWrapper}>
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
      </div>
    </div>
  );
};

export default RegionList;
