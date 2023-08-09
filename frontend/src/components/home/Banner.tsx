'use client';

import React from 'react';

import styled from 'styled-components';

const Banner = () => {
  return <BannerBlock>Banner</BannerBlock>;
};

export default Banner;

const BannerBlock = styled.div`
  width: 100%;
  height: 30rem;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6.5rem;
`;
