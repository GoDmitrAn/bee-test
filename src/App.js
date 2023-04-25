import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { SharedLayout } from "components/SharedLayout/SharedLayout";

const Home = lazy(() => import("./components/pages/Home"));
const Table = lazy(() => import("./components/pages/Table"));
const HouseBee = lazy(() => import("./components/pages/HouseBee"));
const HoneyComb = lazy(() => import("./components/pages/HoneyComb"));
const Honey = lazy(() => import("./components/pages/Honey"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="table" element={<Table />} />
        <Route path="housebee" element={<HouseBee />} />
        <Route path="honeycomb" element={<HoneyComb />} />
        <Route path="honey" element={<Honey />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
