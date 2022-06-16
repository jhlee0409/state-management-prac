import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { pokeNameLinkBox } from "./style.css";
import { getRegions } from "@/apis/regionAPi";
import ListLayout from "../layout/ListLayout";

const RegionList = () => {
  const router = useRouter();
  const slug = +router.query.slug!;
  const { data, isLoading } = useQuery<any>(["region-list", slug], () =>
    getRegions(slug)
  );
  console.log(data);
  if (isLoading) return <p>로딩중</p>;
  return (
    <ListLayout title="REGION" count={data.count}>
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

export default RegionList;
