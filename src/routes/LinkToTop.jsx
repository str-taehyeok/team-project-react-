import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LinkToTop = ({children}) => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>{children}</>
  );
};

export default LinkToTop;