import { useState } from "react";
import "./App.css";
import Users from "./Users";
import UserForm from "./UserForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
