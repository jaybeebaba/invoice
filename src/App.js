import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoice from "./components/App";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Invoice />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
