import React from 'react';

import Header from '@/components/common/Header';
import BoardDetail from '@/components/board/BoardDetail';
import BoardComment from '@/components/board/BoardComment';

const BoardDetailPage = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Header />

      <BoardDetail />

      <BoardComment />
    </div>
  );
};

export default BoardDetailPage;
