import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import Homepage from "./pages/homepage";
import Jokes from "./pages/jokes";
import { useAuth } from "./Auth";
const App = () => {
  const { currentUser } = useAuth();
  console.log(currentUser, "@@@@@@@@@@@@@2");

  return (
    <>
      <Switch>
        <Route exact path="/login" component={LoginPage} />

        <Route
          exact
          path="/homepage"
          component={currentUser ? Homepage : LoginPage}
        />

        <Route
          exact
          path="/jokes"
          component={currentUser ? Jokes : LoginPage}
        />

        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </>
  );
};
export default App;
