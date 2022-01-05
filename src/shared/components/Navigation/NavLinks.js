import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../store/auth-context";
import Button from "../FormElements/Button";
import styles from "./NavLinks.module.scss";

const NavLinks = (props) => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => authCtx.logout();

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
      {authCtx.isLoggedIn && (
        <>
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
            <Button
              className={styles.btn_logout}
              inverted
              onClick={logoutHandler}
            >
              LOGOUT
            </Button>
          </li>
        </>
      )}

      {!authCtx.isLoggedIn && (
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
      )}
    </ul>
  );
};

export default NavLinks;
