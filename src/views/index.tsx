import { lazy } from "react";

const Home = lazy(() => import("./home/view"));
const NumberCars = lazy(() => import("./numberCars/view"));

export { Home, NumberCars };
