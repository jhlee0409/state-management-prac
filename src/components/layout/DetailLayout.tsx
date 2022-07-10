import PagingButtons from "../libs/PagingButtons";
import { detailLayoutWrapper } from "./style.css";

const DetailLayout = ({ isLoading, children, url, hasData }: any) => {
  if (isLoading) return <p>로딩중</p>;
  if (!hasData) return <p>no data</p>;
  return (
    <main className={detailLayoutWrapper}>
      <PagingButtons url={url} />
      <div className={detailLayoutWrapper}>{children}</div>
    </main>
  );
};

export default DetailLayout;
