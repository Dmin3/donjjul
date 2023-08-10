export interface IKakaoLoginRes {
  id: string;
  properties: {
    nickname: string;
    profile_image: string;
  };
  joinStatus: boolean;
}

export interface ISignUpReq {
  id: string;
  nickname: string;
  profileImage: string;
}

export interface IGetMyInfoRes {
  nickname: string;
  profileImage: string;
}
