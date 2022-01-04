import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavLinks.module.scss";

const NavLinks = (props) => {
  return (
    <ul className={`${styles.links_container} ${props.className}`}>
      <li>
        <NavLink
          className={(navData) =>
            navData.isActive ? styles.navLink_active : ""
          }
          to="/"
        >
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) =>
            navData.isActive ? styles.navLink_active : ""
          }
          to="/u1/places"
        >
          MY PLACES
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) =>
            navData.isActive ? styles.navLink_active : ""
          }
          to="/places/new"
        >
          ADD PLACE
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) =>
            navData.isActive ? styles.navLink_active : ""
          }
          to="/auth"
        >
          AUTHENTICATE
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
