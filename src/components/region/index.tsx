import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { pokeGrid, pokeWrapper } from "./style.css";
import PagingButtons from "../libs/PagingButtons";
import BaseInfo from "./BaseInfo";
import Locations from "./Locations";
import Names from "./Names";
import { getRegion } from "@/apis/regionAPi";
import Pokedexes from "./Pokedexes";
import VersionGroups from "./VersionGroups";

const Region = () => {
  const router = useRouter();
  const { data, isLoading } = useQuery<any>(["region", router.query.slug], () =>
    getRegion(+router.query.slug!)
  );
  console.log(data);
  if (isLoading) return <p>로딩중</p>;
  return (
    <main className={pokeWrapper}>
      <PagingButtons url="region" />
      <div className={pokeWrapper}>
        <BaseInfo data={data} />
        <div className={pokeGrid}>
          <Locations locations={data.locations} />
          <Names names={data.names} />
          <Pokedexes data={data.pokedexes} />
          <VersionGroups data={data.version_groups} />
        </div>
      </div>
    </main>
  );
};

export default Region;
