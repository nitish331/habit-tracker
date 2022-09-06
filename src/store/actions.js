import * as actions from "./actionTypes";
export const addingHabit = function (data) {
  return {
    type: actions.HABIT_ADDED,
    payload: {
      title: data.title,
      category: data.category,
    },
  };
};
export const deletingHabit = function (id) {
  return {
    type: actions.HABIT_DELETED,
    id,
  };
};
export const changingStatus = function (habit, weekId, status) {
  return {
    type: actions.STATUS_CHANGED,
    payload: {
      habit,
      weekId,
      status,
    },
  };
};

export const updatingHabits = function () {
  return {
    type: actions.UPDATE_HABITS,
  };
};
