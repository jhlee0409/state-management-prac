import { mainAxios } from "./axios";

export const getPokes = async (offset: number = 0) => {
  const { data } = await mainAxios.get(`/pokemon?limit=20&offset=${offset}`);
  return data;
};

export const getPoke = async (id: number = 0) => {
  const { data } = await mainAxios.get(`/pokemon/${id}`);
  return data;
};

export const getLocationAreaEncounters = async (id: number) => {
  const { data } = await mainAxios.get(`/pokemon/${id}/encounters`);
  return data;
};
