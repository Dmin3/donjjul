'use client';

import React from 'react';

import styled from 'styled-components';

const BoardList = () => {
  return (
    <BoardListBlock>
      <Title>홍보 가게</Title>
    </BoardListBlock>
  );
};

export default BoardList;

const BoardListBlock = styled.div`
  max-width: 70rem;
  height: calc(100vh - 6.5rem);
  margin: 0 auto;
  background-color: lightblue;
  margin-top: 6.5rem;
  padding-top: 2rem;
`;

const Title = styled.h4`
  font-size: 1.8rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: -0.7px;
  color: #191919;
  margin-left: 1.2rem;
`;

const ContentSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1.3rem;
  column-gap: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-top: 2rem;
`;
