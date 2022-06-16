import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { pokeGrid, pokeWrapper } from "./style.css";
import PagingButtons from "../libs/PagingButtons";
import BaseInfo from "./BaseInfo";
import Forms from "./Forms";
import { getBerry } from "@/apis/barryApi";
import Flavors from "./Flavors";

/**
 * @height default = decimeters
 * @weight default = hectograms
 */

const Berry = () => {
  const router = useRouter();
  const { data, isLoading } = useQuery<any>(["berry", router.query.slug], () =>
    getBerry(+router.query.slug!)
  );
  if (isLoading) return <p>로딩중</p>;
  return (
    <div className={pokeWrapper}>
      <PagingButtons url="berry" />
      <div className={pokeWrapper}>
        <BaseInfo data={data} />
        <div className={pokeGrid}>
          <Forms item={data.item} />
          <Flavors flavors={data.flavors} />
        </div>
      </div>
    </div>
  );
};

export default Berry;
