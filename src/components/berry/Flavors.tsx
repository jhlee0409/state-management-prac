import { sprinkles } from "@/styles/sprinkles.css";
import { rowLi } from "./style.css";

const Flavors = ({ flavors }: any) => {
  return (
    <div>
      <h3>flavors</h3>
      <ul>
        {flavors.map(({ potency, flavor }: any) => {
          const color =
            potency === 0 ? "gray-700" : potency > 10 ? "red" : "blue-100";
          return (
            <li key={flavor.name} className={`${rowLi}`}>
              <span
                className={` ${sprinkles({
                  color,
                })}`}
              >{`name : ${flavor.name}`}</span>
              <span>{`potency : ${potency}`}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Flavors;
