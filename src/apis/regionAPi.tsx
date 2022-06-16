import { mainAxios } from "./axios";

export const getRegions = async (offset: number = 0) => {
  const { data } = await mainAxios.get(`/region?limit=20&offset=${offset}`);
  return data;
};

export const getRegion = async (id: number = 0) => {
  const { data } = await mainAxios.get(`/region/${id}`);
  return data;
};
