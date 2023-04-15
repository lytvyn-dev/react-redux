import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showToggle: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showToggle = !state.showToggle;
    },
  },
});

const initialAuthState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    loggedIn(state) {
      state.isAuth = !state.actions;
    },
    loggedOut(state) {
      state.isAuth = false;
    },
  },
});

// Так само як і createStore створює store, але вона виконує зливання багатьок reducers in one набагато простіше.
// Як параметр потребує {}. Це обʼєкт налаштувань які очікує цей хук
const store = configureStore({
  // Обовʼязково має бути це слово
  // Тут повинні бути всі reducers або і один , дивлячись скільки в нас state slice
  // Якщо їх багато тоді це повинний бути обʼєкт
  // Поза сценою configureStore() обʼєднає всі reducers в один глобальний.
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const authActions = authSlice.actions;
export const counterActins = counterSlice.actions;
export default store;
