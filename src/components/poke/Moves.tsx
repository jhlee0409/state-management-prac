import { useState } from "react";
import { openDetailBtn, rowLi } from "./style.css";

const Moves = ({ moves }: any) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <button onClick={() => setShowInfo(!showInfo)} className={openDetailBtn}>
        <h3>moves</h3>
      </button>
      {showInfo && (
        <ul>
          {moves.map(({ move, version_group_details }: any) => {
            return (
              <li key={move.name}>
                <span>{`name : ${move.name}`}</span>
                <DetailInfo details={version_group_details} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

const DetailInfo = ({ details }: any) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <button onClick={() => setShowInfo(!showInfo)} className={openDetailBtn}>
        <h4>Version Info</h4>
      </button>
      <ul>
        {showInfo &&
          details.map(
            ({ level_learned_at, move_learn_method, version_group }: any) => {
              return (
                <li key={move_learn_method.name} className={rowLi}>
                  <span>{`name : ${version_group.name}`}</span>
                  <span>{`minimum level : ${level_learned_at}`}</span>
                  <span>{`method : ${move_learn_method.name}`}</span>
                </li>
              );
            }
          )}
      </ul>
    </div>
  );
};

export default Moves;
