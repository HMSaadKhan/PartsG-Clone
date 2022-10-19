import React from "react";
import styled from "styled-components";
import { Icons } from "../../common";

export const StyledButton = styled.button`
  border-radius: 50px;
  background-color: #cc0011;
  color: #fff;
  width: 85px;
  height: 30px;
  border: none;
  &:hover {
    background-color: #3d464d;
  }
`;

const GoogleButton = () => {
  const { FC } = Icons;
  return (
    <button className="google-button" disabled>
      <div>
        <FC.FcGoogle size={20} />
      </div>
      <span>Login with Google</span>
    </button>
  );
};

export { GoogleButton };
