import { createStore } from "redux";
import HabitReducer from "./reducer";

const store = createStore(HabitReducer);

export default store;
