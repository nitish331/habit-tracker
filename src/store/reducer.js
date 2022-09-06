import * as actions from "./actionTypes";
import * as helper from "./Helper";
let habits = localStorage.getItem("habits");
let initialState = [];
if (habits === null || habits === []) {
  localStorage.setItem("habits", JSON.stringify(new Array(0)));
  initialState = [];
}
if (habits !== null && habits !== []) {
  initialState = JSON.parse(habits);
}
function HabitReducer(state = initialState, action) {
  if (action.type === actions.HABIT_ADDED) {
    const newHabit = {
      id: Math.random() * 1000,
      title: action.payload.title,
      category: action.payload.category,
      week: helper.createWeek(new Date()),
      workDone: 0,
      ratings: 0,
    };
    const newState = [newHabit, ...state];
    localStorage.setItem("habits", JSON.stringify(newState));

    return newState;
  }
  if (action.type === actions.HABIT_DELETED) {
    const newHabits = state.filter((habit) => {
      return habit.id !== action.id;
    });
    localStorage.setItem("habits", JSON.stringify(newHabits));
    return newHabits;
  }
  if (action.type === actions.STATUS_CHANGED) {
    const habitIndex = state.indexOf(action.payload.habit);
    if (state[habitIndex].week[action.payload.weekId].status === "done") {
      state[habitIndex].workDone += -1;
    } else if (action.payload.status === "done") {
      state[habitIndex].workDone += 1;
    }
    state[habitIndex].week[action.payload.weekId].status =
      action.payload.status;
    localStorage.setItem("habits", JSON.stringify(state));
    return state;
  }
  if (action.type === actions.UPDATE_HABITS) {
    const newState = helper.updateHabits(state);
    localStorage.setItem("habits", JSON.stringify(newState));
    return state;
  }
  return state;
}

export default HabitReducer;
