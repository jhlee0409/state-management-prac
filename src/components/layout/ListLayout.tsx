import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import PagingButtons from "../libs/PagingButtons";
import { listWrapper } from "./style.css";

interface ListLayoutInterface {
  title: string;
  children: ReactNode;
  count: number;
}

const ListLayout = ({ title, children, count }: ListLayoutInterface) => {
  const router = useRouter();
  const slug = +router.query.slug!;
  return (
    <div>
      <h1>{`< ${title} LIST >`}</h1>
      <p>{count}</p>
      <p>{`${slug + 1} - ${slug + 20}`}</p>
      <PagingButtons
        url="poke-list"
        offset={20}
        disableNext={count <= slug + 20}
        disablePrev={0 >= slug}
      />
      <div className={listWrapper}>{children}</div>
    </div>
  );
};

export default ListLayout;
