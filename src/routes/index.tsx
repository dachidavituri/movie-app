import { Routes, Route, Navigate } from "react-router";
import { ROOT_PATH } from "./index.enum";
import Layout from "@/components/layout";
import { lazy, Suspense } from "react";
import { MAIN_ROUTES } from "./default-layout/main";

const NotFound = lazy(() => import("@/pages/not-found"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/:lang" element={<Layout />}>
        {MAIN_ROUTES}
      </Route>
      <Route
        path={ROOT_PATH.ROOT}
        element={<Navigate to={ROOT_PATH.REDIRECT} />}
      ></Route>
      <Route
        path={ROOT_PATH.NOTFOUND}
        element={
          <Suspense>
            <NotFound />
          </Suspense>
        }
      ></Route>
    </Routes>
  );
};
export default AppRoutes;
