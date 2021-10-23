/**
 * @author The Craftions Developers <github.com/CraftionsMC>
 * @copyright (c) 2018-2021 Craftions.net. All rights reserved.
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import "./styles/style.scss";

ReactDOM.render(
  <>
    <BrowserRouter>
      <NavigationBar />
      <Routes />
      <Footer />
    </BrowserRouter>
  </>,
  document.querySelector("#root")
);
