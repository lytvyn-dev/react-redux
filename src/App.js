import { Fragment } from "react";
import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  const authState = useSelector((state) => state.auth.isAuth);

  return (
    <Fragment>
      <Header />
      {authState && <UserProfile />}
      {!authState && <Auth />}
      <Counter />;
    </Fragment>
  );
}

export default App;
