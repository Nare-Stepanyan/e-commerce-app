import React, { useState } from "react";
import registerImg from "../../../assets/register.png";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../../components/loader";
import Card from "../../../components/card";
import Button from "../../../components/button";
import styles from "./../auth.module.scss";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const registerUser = () => {
    console.log("register");
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <Card>
          <div className={styles.form}>
            <h2>Register</h2>

            <form>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
              <Button
                label="Register"
                onClick={registerUser}
                className="--btn --btn-primary --btn-block"
              />
            </form>
            <span className={styles.register}>
              <p>Already an account?</p>
              <Link to="/sign-in">Login</Link>
            </span>
          </div>
        </Card>
        <div className={styles.img}>
          <img src={registerImg} alt="Register" width="400" />
        </div>
      </section>
    </>
  );
};

export default Signup;
