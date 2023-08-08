export interface ICreateBoardReq {
  title: string;
  content: string;
}

export interface IEditBoardReq {
  boardId: string;
  title: string;
  content: string;
}

export interface IGetDetailBoardRes {
  id: number;
  title: string;
  content: string;
  nickname: string;
  profileImageUrl: string;
  imageUrl: string | null;
  createAt: string;
  modifyAt: string;
}

export interface IGetBoardListRes {
  id: number;
  title: string;
  content: string;
  nickname: string;
  profileImageUrl: string;
  imageUrl: string | null;
  createAt: string;
  modifyAt: string;
}
[];
