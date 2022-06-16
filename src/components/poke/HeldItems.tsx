import { useState } from "react";
import { openDetailBtn, rowLi } from "./style.css";

const HeldItems = ({ items }: any) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <button onClick={() => setShowInfo(!showInfo)} className={openDetailBtn}>
        <h3>held items</h3>
      </button>
      {showInfo && (
        <ul>
          {items.map(({ item, version_details }: any) => {
            return (
              <li key={item.name}>
                <span>{`name : ${item.name}`}</span>
                <DetailInfo details={version_details} />
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
          details.map(({ rarity, version }: any) => {
            return (
              <li key={version.name} className={rowLi}>
                <span>{`rarity : ${rarity}`}</span>
                <span>{`name : ${version.name}`}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default HeldItems;
