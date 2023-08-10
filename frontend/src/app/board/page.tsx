import React from 'react';

import Header from '@/components/common/Header';
import BoardList from '@/components/board/BoardList';

const Board = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Header />

      <BoardList />
    </div>
  );
};

export default Board;
