import { axios } from '../config/axios';
import { IKakaoLoginRes, ISignUpReq } from './type';

export const kakaoLogin = async (code: string): Promise<IKakaoLoginRes> => {
  const { data } = await axios.get(`/auth/kakao`, {
    params: {
      code,
    },
  });

  return data;
};

export const signUp = async ({ id, nickname, profileImage }: ISignUpReq) => {
  const { data } = await axios.post(`/auth/signup`, {
    id,
    nickname,
    profileImage,
  });

  return data;
};

export const signIn = async (memberId: string) => {
  const { data } = await axios.post(
    `/auth/login`,
    {},
    {
      params: {
        memberId,
      },
    },
  );

  return data;
};
