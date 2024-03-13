import React from "react";
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

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-in" element={<Signin />}></Route>
          <Route path="/sign-up" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/order-history" element={<OrderHistory />}></Route>
          <Route path="/product-details" element={<Product />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
