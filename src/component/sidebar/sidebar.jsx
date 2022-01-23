import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarMenu,
  SideBarLink,
  SideBarBtnWrap,
  SideBarRoute,
} from "./sidebar.styles";

const SideBar = ({ IsOpen, toggle }) => {
  return (
    <SideBarContainer IsOpen={IsOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarMenu>
        <SideBarLink to="/">Pizzas</SideBarLink>
        <SideBarLink to="/">Deserts</SideBarLink>
        <SideBarLink to="/">Full Menu</SideBarLink>
      </SideBarMenu>
      <SideBarBtnWrap>
        <SideBarRoute to="/">Order Now</SideBarRoute>
      </SideBarBtnWrap>
    </SideBarContainer>
  );
};

export default SideBar;
