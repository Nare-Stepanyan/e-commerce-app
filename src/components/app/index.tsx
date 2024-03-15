import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../header";
import {
  Home,
  Signin,
  Profile,
  Signup,
  Admin,
  Product,
  OrderHistory,
  NotFound,
} from "./../../pages";
import { setUser } from "../../store/users/user-slice";
import { useAppDispatch, useAppSelector } from "./hook";
import { isAuthenticatedSelector } from "../../store/users/user-selector";

const App = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(isAuthenticatedSelector);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      dispatch(setUser(user));
    }
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/sign-in" element={<Signin />}></Route>
          <Route path="/sign-up" element={<Signup />}></Route>
          {isAuthenticated ? (
            <>
              <Route path="/" element={<Home />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/admin" element={<Admin />}></Route>
              <Route path="/order-history" element={<OrderHistory />}></Route>
              <Route path="*" element={<NotFound />}></Route>:null
              <Route path="/product-details" element={<Product />}></Route>
            </>
          ) : null}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
