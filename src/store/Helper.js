function getFormattedDate(date) {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  return month + "/" + day + "/" + year;
}

export function createWeek(currDate) {
  const week = [];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  for (let i = 6; i >= 0; i--) {
    let date = new Date(currDate);
    date.setDate(date.getDate() - i);
    const weekDay = {
      day: days[date.getDay()],
      date: getFormattedDate(date),
      dateString: date.toISOString(),
      status: "",
    };
    week.push(weekDay);
  }
  return week;
}

export function updateHabit(habit) {
  const lastIndex = habit.week.length - 1;
  let date1 = new Date();
  const lastDate = new Date(habit.week[lastIndex].date);
  if (lastDate.toDateString() === date1.toDateString()) {
    return;
  }
  const daysLeft = parseInt(
    (date1.getTime() - lastDate.getTime()) / (1000 * 3600 * 24)
  );

  console.log(daysLeft);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  for (let i = 1; i <= daysLeft; i++) {
    let date = new Date(lastDate);
    date.setDate(date.getDate() + i);
    const weekDay = {
      day: days[date.getDay()],
      date: getFormattedDate(date),
      dateString: date.toISOString(),
      status: "",
    };
    habit.week.push(weekDay);
  }
}

export function updateHabits(state) {
  state.forEach(updateHabit);
  return state;
}
