import "./Homepage.css";

import React, { Suspense, lazy } from "react";
import Nav from "components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "components/Loading";

const LazyService = lazy(() => import("components/Service"));
const LazyTrainerList = lazy(() => import("components/TrainerList"));
const LazyAchievement = lazy(() => import("screens/Homepage/Achievements"));
const LazyContact = lazy(() => import("screens/Homepage/Contact"));
const LazySales = lazy(() => import("screens/Homepage/Sales"));
const LazyCarousales = lazy(() => import("screens/Homepage/Carousel"));

const Homepage = () => {
  return (
    <div id="homepage">
      <div id="header">
        <Nav />
        <Suspense fallback={<Loading/>}>
          <div>
            <LazyAchievement />
          </div>
          <LazyCarousales />
          <div id="content">
            {/* Achievement-START */}

            {/* Achievement-END */}
            {/* Service-Start */}
            <div>
              <LazyService />
            </div>
            {/* Service-END */}

            <LazySales />
            <div>
              <LazyContact />
            </div>
            {/* Contact-START */}
            <div>
              <LazyTrainerList />
            </div>
            {/* Contact-END */}
          </div>
        </Suspense>
      </div>
      <div></div>
    </div>
  );
};

export default Homepage;
