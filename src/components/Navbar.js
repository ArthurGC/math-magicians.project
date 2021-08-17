import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCalculator, FaRegHandPointRight } from 'react-icons/fa';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navbar">
      <h1 className="logo">
        <FaCalculator />
        Math Magicians
      </h1>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className="link"
              activeClassName="active-link"
              exact
            >
              <FaRegHandPointRight className="hand" />
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
