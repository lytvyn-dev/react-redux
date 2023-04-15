import { counterActins } from "../store";

import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  // useSelector - дає мам доступ до конекретного чатини нашошо state яка керується store.
  const counterData = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showToggle);
  // дає нам можливість використувувати dispatch function
  const dispachCount = useDispatch();

  const toggleCounterHandler = () => {
    dispachCount(counterActins.toggleCounter());
  };

  const increaseBtnHandler = () => {
    dispachCount(counterActins.increment());
  };
  const decreaseBtnHandler = () => {
    dispachCount(counterActins.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counterData}</div>}
      <div className={classes.counters}>
        <button onClick={increaseBtnHandler}>Increase</button>
        <button onClick={decreaseBtnHandler}>Decrease</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
