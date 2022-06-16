const BaseInfo = ({ data }: any) => {
  return (
    <div>
      <h3>{data.name}</h3>
      <p>{`크기 : ${data.size * 0.1}cm`}</p>
      <p>{`성장 시간 : ${data.growth_time}h`}</p>
      <p>{`수확 가능 수 : ${data.max_harvest}`}</p>
      <p>{`토양 건조 속도 : ${data.soil_dryness}`}</p>
      <p>{`firmness : ${data.firmness.name}`}</p>
      <p>{`smoothness : ${data.smoothness}`}</p>
      <p>{`natural_gift_type : ${data.natural_gift_type.name}`}</p>
      <p>{`natural_gift_power : ${data.natural_gift_power}`}</p>
    </div>
  );
};

export default BaseInfo;
