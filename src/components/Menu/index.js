import React from "react";

import { NavLink } from "react-router-dom";

import "./Menu.scss";

const list = [
  { id: 1, name: "Main", path: "/" },
  { id: 2, name: "Favorites", path: "/favorites" },
];

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        {list.map(({ id, name, path }) => (
          <li key={id} className="menu__item">
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "menu__link--active" : "menu__link"
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
