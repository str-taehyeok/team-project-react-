import React from 'react';
import { Outlet } from 'react-router-dom';

const NoticeContainer = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default NoticeContainer;