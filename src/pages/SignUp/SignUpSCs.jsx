import styled, { css } from "styled-components";
import { SignUpBg } from "../../assets/Photos";

export const BackGround = styled.div`
  background-repeat: no-repeat;
  background-image: url(${SignUpBg.link});
  background-attachment: fixed;
  background-size: 100% 100%;
  height: inherit;
`;



