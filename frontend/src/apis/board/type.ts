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

export interface ICreateBoardCommentReq {
  boardId: string;
  content: string;
}

export interface IEditBoardCommentReq {
  commentId: number;
  content: string;
}

export interface IGetBoardCommentList {
  commentId: number;
  content: string;
  nickname: string;
  profileImage: string;
  createdAt: string;
  modifiedAt: string;
}

export interface IGetBoardCommentListRes extends Array<IGetBoardCommentList> {}
