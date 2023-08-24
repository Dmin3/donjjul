import React from 'react';

import Header from '@/components/common/Header';
import StoreList from '@/components/store/StoreList';

const StoreListPage = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Header />

      <StoreList />
    </div>
  );
};

export default StoreListPage;
