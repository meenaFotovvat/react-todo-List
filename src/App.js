import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import EmptyPage from "./pages/EmptyPage";
import TaskPage from "./pages/TaskPage";
import Layout from "./components/layout/Layout.component";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <EmptyPage />
            </Route>
            <Route path="/list-of-tasks">
              <TaskPage />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
