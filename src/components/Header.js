import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";

const Header = () => {
  const authState = useSelector((state) => state.auth.isAuth);
  const dispatchAuth = useDispatch();

  const logOutBtnHandler = () => {
    dispatchAuth(authActions.loggedOut());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authState && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logOutBtnHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
