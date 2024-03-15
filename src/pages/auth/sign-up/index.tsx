import React, { useState } from "react";
import registerImg from "../../../assets/register.png";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../../components/loader";
import Card from "../../../components/card";
import Button from "../../../components/button";
import styles from "./../auth.module.scss";
import Input from "../../../components/input";
import { useAppDispatch, useAppSelector } from "../../../components/app/hook";
import { loadingSelector } from "../../../store/users/user-selector";
import { createUser } from "../../../store/users/actions";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [error, setError] = useState("");
  const isLoading = useAppSelector(loadingSelector);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const registerUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = await dispatch(
        createUser({
          firstName,
          lastName,
          password,
          email,
          imageUrl: "",
          phone: "",
        })
      );
      if (data) {
        navigate("/sign-in");
      }
    } catch (error) {
      setError("Registration failed:");
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <Card>
          <div className={styles.form}>
            <h2>Register</h2>

            <form onSubmit={registerUser}>
              <Input
                type="text"
                placeholder="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <Input
                type="text"
                placeholder="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
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
              <Input
                type="password"
                placeholder="Confirm Password"
                required
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
              <Button
                label="Register"
                className="--btn --btn-primary --btn-block"
              />
              <p>{error && error}</p>
            </form>
            <span className={styles.register}>
              <p>Already have an account?</p>
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
