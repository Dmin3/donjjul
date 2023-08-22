export interface ICreateBoardReq {
  title: string;
  content: string;
}

export interface ICreateBoardRes {
  id: number;
  title: string;
  content: string;
  nickname: string;
  profileImageUrl: string;
  imageUrlList: null;
  createAt: string;
  modifyAt: string;
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
  createAt: string;
  modifyAt: string;
  likeCount: number;
  imageUrlList: {
    id: number;
    imageUrl: string;
    priority: number;
  }[];
}

export interface IGetBoardList {
  id: number;
  title: string;
  content: string;
  nickname: string;
  profileImageUrl: string;
  imageUrl: string | null;
  createAt: string;
  modifyAt: string;
  likeCount: number;
  imageUrlList: {
    id: number;
    imageUrl: string;
    priority: number;
  }[];
}

export interface IGetBoardListRes extends Array<IGetBoardList> {}
