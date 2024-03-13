import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";

const activeLink = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.active}` : "";

const Header: React.FC = () => {
  const [scrollPage, setScrollPage] = useState(false);

  return (
    <header className={scrollPage ? `${styles.fixed}` : ""}>
      <div className={styles.header}>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/order-history" className={activeLink}>
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className={activeLink}>
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin" className={activeLink}>
                Admin
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles["header-right"]}>
          <span className={styles.links}>
            <NavLink to="/sign-in" className={activeLink}>
              Login
            </NavLink>
            <NavLink to="/sign-up" className={activeLink}>
              Register
            </NavLink>
          </span>
          <span>Cart</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
