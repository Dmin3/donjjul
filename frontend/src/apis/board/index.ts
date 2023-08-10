import { axios } from '../config/axios';
import {
  ICreateBoardReq,
  ICreateBoardRes,
  IEditBoardReq,
  IGetBoardListRes,
  IGetDetailBoardRes,
} from './type';

export const getDetailBoard = async (
  boardId: string,
): Promise<IGetDetailBoardRes> => {
  const { data } = await axios.get(`/board/${boardId}`);

  return data;
};

export const getBoardList = async (): Promise<IGetBoardListRes> => {
  const { data } = await axios.get(`/board`);

  return data;
};

export const createBoard = async ({
  title,
  content,
}: ICreateBoardReq): Promise<ICreateBoardRes> => {
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

export const boardImgUpload = async (boardId: number, imgFile: any) => {
  const formData = new FormData();
  imgFile.map((image: any) => {
    formData.append('data', image);
  });

  const { data } = await axios.post(`/image/${boardId}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return data;
};
