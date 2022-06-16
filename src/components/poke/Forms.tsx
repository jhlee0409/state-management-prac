import { rowLi } from "./style.css";

const Forms = ({ forms }: any) => {
  return (
    <div>
      <h3>forms</h3>
      <ul>
        {forms.map(({ name, url }: any) => {
          return (
            <li key={name} className={rowLi}>
              <span>{`name : ${name}`}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Forms;
