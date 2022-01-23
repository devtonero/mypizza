import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #ffc500;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ IsOpen }) => (IsOpen ? "0" : "-1000px")};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const CloseIcon = styled(FaTimes)`
  color: #000;
`;
export const SideBarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media screen and (max-width: 400px) {
    grid-template-rows: repeat(3, 60px);
  }
`;
export const SideBarLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out
color: #000;
cursor: pointer;


&:hover{
   transition: 0.2s ease-in-out;
   color: #e31837;
}

`;
export const SideBarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SideBarRoute = styled.div`
  background: #e31837;
  padding: 16px 64px;
  white-wrap: nowrap;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: noder;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.2s ease-in-out;
    color: #010606;
    background: #fff;
  }
`;
