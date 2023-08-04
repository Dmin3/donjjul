export interface ICreateBoardReq {
  title: string;
  content: string;
}

export interface IEditBoardReq {
  boardId: string;
  title: string;
  content: string;
}
