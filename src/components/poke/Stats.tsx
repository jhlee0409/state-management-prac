import { useState } from "react";
import { openDetailBtn, rowLi } from "./style.css";

const Stats = ({ stats }: any) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <button onClick={() => setShowInfo(!showInfo)} className={openDetailBtn}>
        <h3>stats</h3>
      </button>
      {showInfo && (
        <ul>
          {stats.map(({ base_stat, effort, stat }: any) => {
            return (
              <li key={stat.name} className={rowLi}>
                <span>{`name : ${stat.name}`}</span>
                <span>{`base : ${base_stat}`}</span>
                <span>{`effort : ${effort}`}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Stats;
