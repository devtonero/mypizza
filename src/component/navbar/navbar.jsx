import { Nav, NavLink, NavIcon, PizIcon } from "./navbar.styles";

const NavBar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Marvelous Pizza</NavLink>

        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <PizIcon />
        </NavIcon>
      </Nav>
    </>
  );
};

export default NavBar;
