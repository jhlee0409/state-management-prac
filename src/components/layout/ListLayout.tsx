import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import PagingButtons from "../libs/PagingButtons";
import { ListLayoutWrapper } from "./style.css";

interface ListLayoutInterface {
  title: string;
  children: ReactNode;
  count: number;
}

const ListLayout = ({ title, children, count }: ListLayoutInterface) => {
  const router = useRouter();
  const slug = +router.query.slug!;
  return (
    <main>
      <div className={ListLayoutWrapper}>
        <h1>{`< ${title} list >`}</h1>
        <p>{count}</p>
        <p>{`${slug + 1} - ${slug + 20}`}</p>
        <PagingButtons
          url={`${title}-list`}
          offset={20}
          disableNext={count <= slug + 20}
          disablePrev={0 >= slug}
        />
        {children}
      </div>
    </main>
  );
};

export default ListLayout;
