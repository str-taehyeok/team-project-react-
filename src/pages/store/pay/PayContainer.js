import React from 'react';
import { Outlet } from 'react-router-dom';

const PayContainer = () => {
  return (
    <div>
      페이 컨테이너
      <Outlet />
    </div>
  );
};

export default PayContainer;