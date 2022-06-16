import { useState } from "react";
import { openDetailBtn, rowLi } from "./style.css";

const GameIndices = ({ data }: any) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <button onClick={() => setShowInfo(!showInfo)} className={openDetailBtn}>
        <h3>game Indices</h3>
      </button>
      {showInfo && (
        <ul>
          {data.map(({ version, game_index }: any) => {
            return (
              <li key={version.name} className={rowLi}>
                <span>{`id : ${game_index}`}</span>
                <span>{`name : ${version.name}`}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default GameIndices;
