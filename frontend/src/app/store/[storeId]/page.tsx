import React from 'react';

import Header from '@/components/common/Header';
import StoreDetail from '@/components/store/StoreDetail';

const StoreDetailPage = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Header />

      <StoreDetail />
    </div>
  );
};

export default StoreDetailPage;
