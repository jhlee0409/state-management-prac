import { rowLi } from "./style.css";

const Names = ({ names }: any) => {
  return (
    <div>
      <h3>names</h3>
      <ul>
        {names.map(({ name, language }: any) => {
          return (
            <li key={`names-${name}-${language.name}`} className={`${rowLi}`}>
              <span>{`${language.name} - ${name}`}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Names;
