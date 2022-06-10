import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Homepage from "./component/homepage";
import theme from "./utils/theme";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />

      <Redirect path="*" to="/" />
    </Switch>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
