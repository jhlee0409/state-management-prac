import { rowLi } from "./style.css";

const VersionGroups = ({ data }: any) => {
  return (
    <div>
      <h3>Version Groups</h3>
      <ul>
        {data.map(({ name }: any) => {
          return (
            <li key={`version-groups-${name}`} className={`${rowLi}`}>
              <span>{`${name}`}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VersionGroups;
