import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Nav>
      {/* 1 */}
      <NavItem>
        <Link to={"/"}>
          <NavLink>Home</NavLink>
        </Link>
      </NavItem>

      {/* 2 */}
      <NavItem>
        <Link to={"/about"}>
          <NavLink>About</NavLink>
        </Link>
      </NavItem>

      {/* 3 */}
      <NavItem>
        <Link to={"/articleList"}>
          <NavLink>ArticleList</NavLink>
        </Link>
      </NavItem>

      {/* 4 */}

      <NavItem>
        <Link to={"/ContactUs"}>
          <NavLink>Contact Us</NavLink>
        </Link>
      </NavItem>
    </Nav>
  );
}

export default Header;
