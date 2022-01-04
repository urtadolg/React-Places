import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "../UIElements/Backdrop";

import styles from "./MainNavigation.module.scss";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <CSSTransition
        in={drawerIsOpen}
        timeout={200}
        classNames="slide-in-left"
        mountOnEnter
        unmountOnExit
      >
        <SideDrawer onClick={closeDrawerHandler} />
      </CSSTransition>
      <button onClick={openDrawerHandler} className={styles.menu_btn}>
        <span />
        <span />
        <span />
      </button>
      <h1>
        <Link to="/">YourPlaces</Link>
      </h1>
      <nav className={styles.nav_container}>
        <NavLinks className={styles.nav_links} />
      </nav>
    </>
  );
};

export default MainNavigation;
