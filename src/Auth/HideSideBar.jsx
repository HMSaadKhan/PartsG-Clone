import React from "react";
import { useLocation } from "react-router-dom";
const HideSideBar = (props) => {
  const location = useLocation();
  console.log(location);
  return (
    <div>{location.pathname !== "/admin/login" && <>{props.children}</>}</div>
  );
};

export default HideSideBar;
