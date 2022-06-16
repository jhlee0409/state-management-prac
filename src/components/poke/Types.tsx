import { rowLi } from "./style.css";

const Types = ({ types }: any) => {
  return (
    <div>
      <h3>types</h3>
      <ul>
        {types.map(({ slot, type }: any) => {
          return (
            <li key={type.name} className={rowLi}>
              <span>{`name : ${type.name}`}</span>
              <span>{`slot : ${slot}`}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Types;
