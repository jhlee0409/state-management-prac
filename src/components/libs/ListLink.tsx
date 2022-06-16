import Link from "next/link";
import { nameLinkBox } from "./styles.css";

const ListLink = ({ data }: any) => {
  const link = data.url.split(`v2`)[1];
  return (
    <Link href={`${link}`}>
      <a className={nameLinkBox}>
        <span>{`${link.split("/")[2]}.`}</span>
        <h3>{data.name}</h3>
      </a>
    </Link>
  );
};

export default ListLink;
