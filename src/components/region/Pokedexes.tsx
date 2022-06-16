import { rowLi } from "./style.css";

const Pokedexes = ({ data }: any) => {
  return (
    <div>
      <h3>pokedexes</h3>
      <ul>
        {data.map(({ name }: any) => {
          return (
            <li key={`pokedexes-${name}`} className={`${rowLi}`}>
              <span>{`${name}`}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pokedexes;
