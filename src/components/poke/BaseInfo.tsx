const BaseInfo = ({ data }: any) => {
  return (
    <div>
      <h3>{data.name}</h3>
      <p>{`${(data.weight * 0.1).toFixed(2)} kg`}</p>
      <p>{`${data.height * 10} cm`}</p>
      <p>{`획득 경험치 : ${data.base_experience}`}</p>
      <p>{`종 : ${data.species.name}`}</p>
    </div>
  );
};

export default BaseInfo;
