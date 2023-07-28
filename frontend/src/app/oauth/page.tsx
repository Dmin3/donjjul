'use client';

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const Oauth = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('code')) {
    }
  }, []);

  return <div>page</div>;
};

export default Oauth;
