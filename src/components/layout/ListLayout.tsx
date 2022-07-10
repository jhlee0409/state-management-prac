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
  const offset = 20;
  return (
    <main>
      <div className={ListLayoutWrapper}>
        <h1>{`< ${title} list >`}</h1>
        <p>{`Total : ${count}`}</p>
        <p>{`( ${slug + 1} - ${slug + offset} )`}</p>
        <p>{`${(slug + offset) / offset} / ${Math.ceil(count / offset)}`}</p>
        <PagingButtons
          url={`${title}-list`}
          offset={offset}
          disableNext={count <= slug + offset}
          disablePrev={0 >= slug}
        />
        {children}
      </div>
    </main>
  );
};

export default ListLayout;
