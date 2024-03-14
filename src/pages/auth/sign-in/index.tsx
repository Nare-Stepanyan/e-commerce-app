import React, { useState } from "react";
import styles from "./../auth.module.scss";
import Loader from "../../../components/loader";
import loginImg from "./../../../assets/login.png";
import Card from "../../../components/card";
import { Link } from "react-router-dom";
import Button from "../../../components/button";
import Input from "../../../components/input";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loginUser = () => {
    console.log("login");
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

            <form>
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
                onClick={loginUser}
                className="--btn --btn-primary --btn-block"
              />
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
