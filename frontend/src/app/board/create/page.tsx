import React from 'react';

import CreateBoard from '@/components/board/CreateBoard';

const BoardCreate = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#e4e4e4',
      }}
    >
      <CreateBoard />
    </div>
  );
};

export default BoardCreate;
