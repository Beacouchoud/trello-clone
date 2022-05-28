import { createStore } from "redux";
import { generateSampleData } from "../utils.js";
import reducer from "./reducers/reducer.js";

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedState = loadState();

const store = createStore(reducer, persistedState);

//evitamos que se guarde el estado demasiadas veces
let throttleTimer;

const throttle = (callback, time) => {
  if (throttleTimer) return;
  throttleTimer = true;
  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

store.subscribe(() => {
  throttle(
    saveState({
      ...store.getState(),
    }),
    1000
  );
});

if (!store.getState().board.length) {
  generateSampleData(store);
}

export default store;
