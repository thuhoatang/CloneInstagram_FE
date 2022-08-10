import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

import LoginSignup from "./layout/LoginSignup";
import Login from "./components/pages/Login/Login";
import history from "./history";
import routesPublic from "./routes/routesPublic";

export default class App extends Component {
  render() {
    return (
      <div>
        <HistoryRouter history={history}>
          <Routes>
            {routesPublic.map((item, index) => {
              let Layout = item.layout;
              let Page = item.page;
              return <Route exact key={index} path={item.path}
              element={<Layout><Page></Page></Layout>}
              />
            })}
            {/* <LoginSignup>
              <Login />
            </LoginSignup> */}
          </Routes>
        </HistoryRouter>
      </div>
    );
  }
}
