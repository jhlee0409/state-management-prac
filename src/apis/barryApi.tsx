import { mainAxios } from "./axios";

export const getBerries = async (offset: number = 0) => {
  const { data } = await mainAxios.get(`/berry?limit=20&offset=${offset}`);
  return data;
};

export const getBerry = async (id: number = 0) => {
  const { data } = await mainAxios.get(`/berry/${id}`);
  return data;
};
