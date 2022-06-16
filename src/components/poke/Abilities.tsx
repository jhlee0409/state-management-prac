import { useState } from "react";
import { openDetailBtn, rowLi } from "./style.css";

const Abilities = ({ abilities }: any) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <button onClick={() => setShowInfo(!showInfo)} className={openDetailBtn}>
        <h3>abilities</h3>
      </button>
      {showInfo && (
        <ul>
          {abilities.map(({ ability, slot, is_hidden }: any) => {
            return (
              <li key={ability.name} className={rowLi}>
                <span>{`name : ${ability.name}`}</span>
                <span>{`is hidden : ${is_hidden ? "hidden" : "reveal"}`}</span>
                <span>{`slot : ${slot}`}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Abilities;
