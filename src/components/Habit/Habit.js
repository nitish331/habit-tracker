import React from "react";
import { useNavigate } from "react-router-dom";
import { deletingHabit } from "../../store/actions";
import store from "../../store/store";
import Class from "./Habit.module.css";
const Habit = (props) => {
  const navigation = useNavigate();
  function deleteHabit(id) {
    store.dispatch(deletingHabit(id));
    props.reRender();
  }
  function DetailHandler(id) {
    navigation(`habit/${id}/detail`);
  }
  return (
    <div className={Class.container}>
      <h3>{props.title}</h3>
      <div>
        <p>Category: {props.category}</p>
        <p>
          count: {props.workDone}/{props.week.length}
        </p>
        <ion-icon
          onClick={(e) => {
            e.preventDefault();
            deleteHabit(props.id);
          }}
          name="trash"
        ></ion-icon>
        <button
          onClick={(e) => {
            e.preventDefault();
            DetailHandler(props.id);
          }}
          type="button"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default Habit;
