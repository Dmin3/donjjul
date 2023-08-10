import { axios } from '../config/axios';
import { IGetMyInfoRes, IKakaoLoginRes, ISignUpReq } from './type';

export const kakaoLogin = async (
  code: string | null,
): Promise<IKakaoLoginRes> => {
  const { data } = await axios.get(`/auth/kakao`, {
    params: {
      code,
    },
  });

  return data;
};

export const signUp = async ({ id, nickname, profileImage }: ISignUpReq) => {
  const { data, headers } = await axios.post(`/auth/signup`, {
    id,
    nickname,
    profileImage,
  });

  return { data, headers };
};

export const signIn = async (memberId: string) => {
  const { data, headers } = await axios.post(
    `/auth/login`,
    {},
    {
      params: {
        memberId,
      },
    },
  );

  return { data, headers };
};

export const getMyInfo = async (): Promise<IGetMyInfoRes> => {
  const { data } = await axios.get('/member/me');

  return data;
};
