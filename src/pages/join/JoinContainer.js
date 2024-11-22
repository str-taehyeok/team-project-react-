import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { JoinProvider } from "../../context/joinContext";

const JoinContainer = () => {

  return (
    <JoinProvider>
      <Outlet />
    </JoinProvider>
  );
};

export default JoinContainer;
