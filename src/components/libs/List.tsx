import { listWrapper } from "../layout/style.css";
import ListLink from "./ListLink";

const List = ({ data }: any) => {
  return (
    <div className={listWrapper}>
      {data?.map((item: { name: string; url: string }) => {
        return <ListLink key={item.name} data={item} />;
      })}
    </div>
  );
};

export default List;
