import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./assets/fonts/icons.css";
import App from "./App";
import { TaskContextProvider } from './components/store/task-context';

ReactDOM.render(
    <TaskContextProvider>
    <App />
    </TaskContextProvider>, document.getElementById("root"));
