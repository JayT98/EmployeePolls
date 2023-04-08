import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter} from "react-router-dom";
import {setAuthedUser} from "./actions/authedUser";

describe("App", () => {
  it("render the component", () => {
      const component = render(
          <Provider store={store}>
              <BrowserRouter>
                  <App/>
              </BrowserRouter>
          </Provider>
      );
      expect(component).toBeDefined();
      expect(component).toMatchSnapshot();
  });

  it("show Login page when not logged in", () => {
      const component = render(
          <Provider store={store}>
              <BrowserRouter>
                  <App/>
              </BrowserRouter>
          </Provider>
      );
      const heading = component.getByTestId("login-heading");
      expect(heading).toBeInTheDocument();
  });

  it("should show Dashboard page when logged in", () => {
      store.dispatch(setAuthedUser({id: "", password: ""}));

      const component = render(
          <Provider store={store}>
              <BrowserRouter>
                  <App/>
              </BrowserRouter>
          </Provider>
      );

      const heading = component.getByTestId("heading");
      expect(heading).toBeInTheDocument();
  });
});