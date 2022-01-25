import React, { useState } from "react";

import classNames from "classnames";

import { NavLink } from "react-router-dom";

import "./Menu.scss";

const list = [
  { id: 1, name: "Main", path: "/" },
  { id: 2, name: "Favorites", path: "/favorites" },
];

const Menu = () => {
  const [active, setActive] = useState(list[0]);

  const changeActive = (id) => {
    setActive(list?.find((item) => item.id === id));
  };

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
              onClick={() => changeActive(id)}
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
