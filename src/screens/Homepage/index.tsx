import "./Homepage.css";

import React, { Suspense, lazy } from "react";
import Nav from "components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "components/Loading";
import { MyCalendar } from "components";

const LazyService = lazy(() => import("components/Service"));
const LazyTrainerList = lazy(() => import("components/TrainerList"));
const LazyAchievement = lazy(() => import("screens/Homepage/Achievements"));
const LazyContact = lazy(() => import("screens/Homepage/Contact"));
const LazySales = lazy(() => import("screens/Homepage/Sales"));
const LazyCarousales = lazy(() => import("screens/Homepage/Carousel"));
const LazyMap = lazy(() => import("screens/Homepage/Map"))

const Homepage = () => {
  return (
    <div id="homepage">
      <div id="header">
        <Suspense fallback={<Loading />}>
          <Nav />
          <div>
            <LazyAchievement />
          </div>
          <LazyCarousales />
          <div id="content">
            <div>
              <LazyService />
            </div>

            <LazySales />
            <div>
              <LazyContact />
            </div>
            <MyCalendar/>
            <div>
              <LazyTrainerList />
            </div>
            <LazyMap/>
          </div>
        </Suspense>
      </div>
      <div></div>
    </div>
  );
};

export default Homepage;
