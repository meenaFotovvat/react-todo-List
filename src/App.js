import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import EmptyPage from "./pages/EmptyPage";
import TaskPage from "./pages/TaskPage";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <EmptyPage />
            </Route>
            <Route path="/list-of-tasks">
              <TaskPage />
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
