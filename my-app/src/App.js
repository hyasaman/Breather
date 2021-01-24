import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import configureStore from "./store";
import { MainPage } from "./components/Page";
const store = configureStore();

export const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};

export default App;
