import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <ul
      style={{
        display: "flex",
        listStyleType: "none",
        backgroundColor: "orange",
      }}
    >
      <li style={{ marginRight: "20px" }}>
        <NavLink to="/">Main Page</NavLink>
      </li>
      <li style={{ marginRight: "20px" }}>
        <NavLink to="portfolio">Portfolio Page</NavLink>
      </li>
      <li style={{ marginRight: "20px" }}>
        <NavLink to="/contacts">Contacts Page</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login Page</NavLink>
      </li>
    </ul>
  );
}
