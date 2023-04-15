import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";

import { authActions } from "../store";

const Auth = () => {
  const dispatchAuth = useDispatch();

  const loginBtnHandler = (e) => {
    e.preventDefault();
    dispatchAuth(authActions.loggedIn());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={loginBtnHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
