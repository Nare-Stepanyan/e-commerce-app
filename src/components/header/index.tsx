import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./header.module.scss";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { isAuthenticatedSelector } from "../../store/users/user-selector";
import Button from "../button";
import { logout } from "../../store/users/user-slice";
import logo from "./../../assets/logo.png";

const activeLink = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.active}` : "";

const Header: React.FC = () => {
  const [scrollPage, setScrollPage] = useState(false);
  const isAuthenticated = useAppSelector(isAuthenticatedSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/sign-in");
  };

  return (
    <header className={scrollPage ? `${styles.fixed}` : ""}>
      <div className={styles.header}>
        {!isAuthenticated ? (
          <>
            <img src={logo} alt="logo" width={80} />
            <h2>Where Every Purchase Tells a Story.</h2>
          </>
        ) : (
          <>
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
              <Button label="Log out" onClick={handleLogout} />
              <span>Cart</span>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
