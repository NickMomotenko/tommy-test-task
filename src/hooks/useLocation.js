import React from "react";

import { useLocation as locationHook } from "react-router-dom";

export const useLocation = () => {
  const location = locationHook();
  

  return { pathname: location.pathname };
};
