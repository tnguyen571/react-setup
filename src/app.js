import React from "react";
import { ToastContainer } from 'react-toastify'
import LeftMenu from "./components/left-menu/left-menu";
import ThemeContextProvider from "./components/contexts/context-provider";

const App = () => {
  return (
    <div class="container-fluid">
      <ToastContainer />
      <ThemeContextProvider theme="light_blue">
        <div class="container">
          <LeftMenu name="Tri" />
        </div>
      </ThemeContextProvider>
    </div>
  );
};

export default App;