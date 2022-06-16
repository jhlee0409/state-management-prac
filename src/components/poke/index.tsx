import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getPoke } from "@/apis/pokeApi";
import PokeImageList from "./PokeImageList";
import { pokeGrid, pokeWrapper } from "./style.css";
import Abilities from "./Abilities";
import Stats from "./Stats";
import Types from "./Types";
import HeldItems from "./HeldItems";
import Moves from "./Moves";
import BaseInfo from "./BaseInfo";
import Forms from "./Forms";
import GameIndices from "./GameIndices";
import PastTypes from "./PastTypes";
import LocationAreaEncounters from "./LocationAreaEncounters";
import PagingButtons from "../libs/PagingButtons";

/**
 * @height default = decimeters
 * @weight default = hectograms
 */
const Poke = () => {
  const router = useRouter();
  const { data, isLoading } = useQuery<any>(["poke", router.query.slug], () =>
    getPoke(+router.query.slug!)
  );

  const slug = +router.query.slug!;

  if (isLoading) return <p>로딩중</p>;
  return (
    <div className={pokeWrapper}>
      <PagingButtons url="pokemon" disablePrev={slug === 1} />
      <div className={pokeWrapper}>
        <PokeImageList data={data} />
        <BaseInfo data={data} />
        <div className={pokeGrid}>
          <Forms forms={data.forms} />
          <Types types={data.types} />
        </div>
        <div className={pokeGrid}>
          <LocationAreaEncounters />
          <GameIndices data={data.game_indices} />
          <Abilities abilities={data.abilities} />
          <Stats stats={data.stats} />
          <PastTypes types={data.past_types} />
          <HeldItems items={data.held_items} />
          <Moves moves={data.moves} />
        </div>
      </div>
    </div>
  );
};

export default Poke;
