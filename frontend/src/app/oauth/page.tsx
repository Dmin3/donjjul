'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { kakaoLogin, signIn, signUp } from '@/apis/auth';

const Oauth = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const code = searchParams.get('code');

  useEffect(() => {
    if (code) {
      kakaoLogin(code).then((res) => {
        if (res.joinStatus) {
          signIn(res.id).then((res) => {
            localStorage.setItem(
              'accessToken',
              res.headers.authorization.replace('Bearer', '').replace(/ /g, ''),
            );
          });
        }

        if (!res.joinStatus) {
          signUp({
            id: res.id,
            nickname: res.properties.nickname,
            profileImage: res.properties.profile_image,
          }).then((res) => {
            localStorage.setItem(
              'accessToken',
              res.headers.authorization.replace('Bearer', '').replace(/ /g, ''),
            );
          });
        }
      });
    }
  }, []);
};

export default Oauth;
