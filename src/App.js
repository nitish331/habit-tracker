import React from "react";
import { ReactNotifications } from "react-notifications-component";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./components/Dashboard/dashBoard";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "react-notifications-component/dist/theme.css";
import HabitDetail from "./components/HabitDetails/HabitDetail";

function App() {
  return (
    <div className="App">
      <ReactNotifications />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
        <Route
          exact
          path="/dashboard/habit/:id/detail"
          element={<HabitDetail />}
        />
      </Routes>
    </div>
  );
}

export default App;
