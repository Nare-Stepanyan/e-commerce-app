import React, { useEffect, useState } from "react";
import styles from "./../auth.module.scss";
import Loader from "../../../components/loader";
import loginImg from "./../../../assets/login.png";
import Card from "../../../components/card";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/button";
import Input from "../../../components/input";
import { useAppDispatch, useAppSelector } from "../../../components/app/hook";
import {
  isAuthenticatedSelector,
  loadingSelector,
  usersSelector,
} from "../../../store/users/user-selector";
import { getUsers } from "../../../store/users/actions";
import { setUser } from "../../../store/users/user-slice";
import { decryptPassword } from "../../../helpers";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isLoading = useAppSelector(loadingSelector);
  const users = useAppSelector(usersSelector);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    await dispatch(getUsers());
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const user = users?.find((user) => user.email === email);
      if (!user) {
        setError("User not found");
        return;
      }
      const passwordMatch =
        decryptPassword(user.password as string) === password;

      if (passwordMatch) {
        dispatch(setUser(user));

        navigate("/home");
      } else setError("Invalid email or password");
    } catch (error) {
      setError("Login failed. Please try again later.");
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} alt="Login" width="400" />
        </div>

        <Card>
          <div className={styles.form}>
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
              <Input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                label="Login"
                className="--btn --btn-primary --btn-block"
              />
              <p>{error && error}</p>
            </form>

            <span className={styles.register}>
              <p>Don't have an account?</p>
              <Link to="/sign-up">Register</Link>
            </span>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Signin;
