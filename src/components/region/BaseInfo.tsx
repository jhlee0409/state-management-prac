const BaseInfo = ({ data }: any) => {
  return (
    <div>
      <h3>{data.name}</h3>
      <p>{`main_generation : ${data.main_generation.name}`}</p>
    </div>
  );
};

export default BaseInfo;
