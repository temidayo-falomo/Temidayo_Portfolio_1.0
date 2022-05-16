import React from "react";
import "./App.css";
import ErrorPage from "./components/errorPage/ErrorPage";
import RoutesContainer from "./RoutesContainer";

function App() {
  return (
    <>
      <RoutesContainer />
      <ErrorPage />
    </>
  );
}

export default App;
