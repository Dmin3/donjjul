import { axios } from '../config/axios';
import { IGetStore, IGetStoreListRes } from './type';

export const getStoreList = async (): Promise<IGetStoreListRes> => {
  const { data } = await axios.get(`/store`);

  return data;
};

export const getDetailStore = async (storeId: string): Promise<IGetStore> => {
  const { data } = await axios.get(`/store/${storeId}`);

  return data;
};
