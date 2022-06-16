import Link from "next/link";
import { useRouter } from "next/router";
import { disableLink, pagingBtnBox } from "./styles.css";

interface PropsType {
  url: string;
  offset?: number;
  disableNext?: boolean;
  disablePrev?: boolean;
}

const PagingButtons = ({
  url,
  offset = 1,
  disableNext = false,
  disablePrev = false,
}: PropsType) => {
  const router = useRouter();
  return (
    <div className={pagingBtnBox}>
      <Link href={`/${url}/${+router.query.slug! - offset}`}>
        <a className={disablePrev ? disableLink : ""}>이전</a>
      </Link>
      <Link href={`/${url}/${+router.query.slug! + offset}`}>
        <a className={disableNext ? disableLink : ""}>다음</a>
      </Link>
      <Link href={`/`}>
        <a>HOME</a>
      </Link>
    </div>
  );
};

export default PagingButtons;
