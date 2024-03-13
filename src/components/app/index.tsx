import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../not-found";
import Header from "../header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
