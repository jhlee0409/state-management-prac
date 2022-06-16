import { pokeImageBox, pokeImageWrapper } from "./style.css";
import Image from "next/image";

const PokeImageList = ({ data }: any) => {
  return (
    <div className={pokeImageWrapper}>
      {data?.sprites &&
        Object.keys(data?.sprites).map((img) => {
          if (
            data.sprites[img] === null ||
            typeof data.sprites[img] !== "string" ||
            img.search("shiny") !== -1
          )
            return;
          return (
            <div className={pokeImageBox} key={img}>
              <Image src={data.sprites[img]} alt={data.name} layout="fill" />
            </div>
          );
        })}
    </div>
  );
};

export default PokeImageList;
