import React, { useState } from "react";
import Form from "../HabitForm/Form";
import Class from "./Home.module.css";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  function showformHandler(e) {
    e.preventDefault();
    setShowForm(true);
  }
  return (
    <div className={Class.container}>
      {showForm && <Form />}
      {!showForm && (
        <button onClick={showformHandler} type="button">
          Add Habit
        </button>
      )}
    </div>
  );
};

export default Home;
