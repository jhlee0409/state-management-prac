import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { wrapper } from "./style.css";

const Home = () => {
  return (
    <div className={wrapper}>
      <h2>HOME</h2>
      <Link href={"/poke-list/0"}>
        <a>POKE-LIST</a>
      </Link>
      <Link href={"/berry-list/0"}>
        <a>BERRY-LIST</a>
      </Link>
      <Link href={"/region-list/0"}>
        <a>REGION-LIST</a>
      </Link>
    </div>
  );
};

export default Home;
