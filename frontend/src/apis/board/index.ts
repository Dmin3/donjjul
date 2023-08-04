import { axios } from '../config/axios';
import { ICreateBoardReq, IEditBoardReq } from './type';

export const getDetailBoard = async (boardId: string) => {
  const { data } = await axios.get(`/board/${boardId}`);

  return data;
};

export const getBoardList = async () => {
  const { data } = await axios.get(`/board`);

  return data;
};

export const createBoard = async ({ title, content }: ICreateBoardReq) => {
  const { data } = await axios.post(`/board`, {
    title,
    content,
  });

  return data;
};

export const editBoard = async ({ boardId, title, content }: IEditBoardReq) => {
  const { data } = await axios.patch(`/board/${boardId}`, {
    title,
    content,
  });

  return data;
};

export const deleteBoard = async (boardId: string) => {
  const { data } = await axios.delete(`/board/${boardId}`);

  return data;
};
