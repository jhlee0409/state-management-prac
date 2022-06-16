import { getLocationAreaEncounters } from "@/apis/pokeApi";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import { openDetailBtn, rowLi } from "./style.css";

const LocationAreaEncounters = () => {
  const router = useRouter();
  const [showInfo, setShowInfo] = useState(false);

  const { data, isLoading } = useQuery<any>(
    ["poke-location-area-encounters]", router.query.slug],
    () => getLocationAreaEncounters(+router.query.slug!)
  );

  return (
    <div>
      <button onClick={() => setShowInfo(!showInfo)} className={openDetailBtn}>
        <h3>Location Area Encounters</h3>
      </button>
      {showInfo &&
        (isLoading ? (
          <p>로딩중</p>
        ) : (
          <ul>
            {data?.length !== 0
              ? data.map(({ location_area, version_details }: any) => {
                  return (
                    <li key={location_area.name} className={rowLi}>
                      <span>{`name : ${location_area.name}`}</span>
                      <DetailInfo details={version_details} />
                    </li>
                  );
                })
              : "없음"}
          </ul>
        ))}
    </div>
  );
};

const DetailInfo = ({ details }: any) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <button onClick={() => setShowInfo(!showInfo)} className={openDetailBtn}>
        <h4>Version Info</h4>
      </button>
      <ul>
        {showInfo &&
          details.map(({ version, max_chance, encounter_details }: any) => {
            return (
              <li key={version.name}>
                <span>{`name : ${version.name}`}</span>
                <span>{`max_chance : ${max_chance}`}</span>
                <DetailInfo2 details={encounter_details} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};
const DetailInfo2 = ({ details }: any) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <button onClick={() => setShowInfo(!showInfo)} className={openDetailBtn}>
        <h4>Version Info</h4>
      </button>
      <ul>
        {showInfo &&
          details.map(
            ({
              chance,
              condition_values,
              max_level,
              method,
              min_level,
            }: any) => {
              return (
                <li key={method.name}>
                  <p>{`method : ${method.name}`}</p>
                  <p>{`max_level : ${max_level}`}</p>
                  <p>{`min_level : ${min_level}`}</p>
                  <p>{`chance : ${chance}`}</p>
                  <DetailInfo3 details={condition_values} />
                </li>
              );
            }
          )}
      </ul>
    </div>
  );
};

const DetailInfo3 = ({ details }: any) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <button onClick={() => setShowInfo(!showInfo)} className={openDetailBtn}>
        <h4>Version Info</h4>
      </button>
      <ul>
        {showInfo &&
          details.map(({ name }: any) => {
            return (
              <li key={name}>
                <span>{`name : ${name}`}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default LocationAreaEncounters;
