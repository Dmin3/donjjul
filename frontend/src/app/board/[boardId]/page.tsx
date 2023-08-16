import React from 'react';

import Header from '@/components/common/Header';
import BoardDetail from '@/components/board/BoardDetail';

const BoardDetailPage = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Header />

      <BoardDetail />
    </div>
  );
};

export default BoardDetailPage;
