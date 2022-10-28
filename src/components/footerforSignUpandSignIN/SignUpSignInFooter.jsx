import React from "react";
import { route } from "../../common";
import { useNavigate } from "react-router-dom";

import "../../pages/Buyer/SignUp/signup.css";
const SignUpFooter = () => {
  const navigate = useNavigate();
  return (
    <div className="SignUpFooter">
      <div
        className="route-link"
        onClick={() => {
          navigate(route.Home);
        }}
      >
        Home
      </div>
      <div>Shop</div>
      <div>Popular Products</div>
      <div>Brands</div>
    </div>
  );
};

export default SignUpFooter;
