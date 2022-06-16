import { useState } from "react";
import { openDetailBtn, rowLi } from "./style.css";

const PastTypes = ({ types }: any) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <button onClick={() => setShowInfo(!showInfo)} className={openDetailBtn}>
        <h3>past types</h3>
      </button>
      {showInfo && (
        <ul>
          {types.map(({ generation, types }: any) => {
            return (
              <li key={generation.name}>
                <span>{`name : ${generation.name}`}</span>
                <DetailInfo details={types} />
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
      <button onClick={() => setShowInfo(!showInfo)}>show Info</button>
      <ul>
        {/* <h4>Version Info</h4> */}
        {showInfo &&
          details.map(({ slot, type }: any) => {
            return (
              <li key={type.name} className={rowLi}>
                <span>{`slot : ${slot}`}</span>
                <span>{`name : ${type.name}`}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default PastTypes;
