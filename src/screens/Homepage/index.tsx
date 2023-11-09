import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "components/Loading";
import Nav from "components/Nav";
import { Suspense, lazy } from "react";
import "./Homepage.css";
const LazyService = lazy(() => import("screens/Homepage/ServiceHomePage"));
const LazyTrainerList = lazy(() => import("screens/Homepage/TrainerList"));
const LazyAchievement = lazy(() => import("screens/Homepage/Achievements"));
const LazyContact = lazy(() => import("screens/Homepage/Contact"));
const LazySales = lazy(() => import("screens/Homepage/Sales"));
const LazyCarousales = lazy(() => import("screens/Homepage/Carousel"));
const LazyMap = lazy(() => import("screens/Homepage/Map"));

const Homepage = () => {
  return (
    <div id="homepage">
      <div id="header">
        <Suspense fallback={<Loading />}>
          <Nav />

          <div>
            <LazyAchievement />
          </div>

          <div>
            <LazyCarousales />
          </div>

          <div>
            <LazyService />
          </div>

          <div>
            <LazySales />
          </div>

          <div>
            <LazyContact />
          </div>

          <div>
            <LazyTrainerList />
          </div>

          <LazyMap />
        </Suspense>
      </div>
    </div>
  );
};

export default Homepage;
