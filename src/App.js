import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import Loader from "./views/components/loader";
import {ROUTES} from "./helper/constants/routes"

// Lazy load components
const Navbar = lazy(() => import("./views/app/navBar"));
const AddBox = lazy(() => import("./views/app/addBox"));
const BoxList = lazy(() => import("./views/app/boxList"));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loader />}>
          <Navbar/>
          <Routes>
            <Route path={ROUTES["Home"]} element={<AddBox />} />
            <Route path={ROUTES["BoxList"]} element={<BoxList />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
