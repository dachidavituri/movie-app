import { Route } from "react-router";
import { lazy, Suspense } from "react";
import Loading from "@/components/loading";
import { MAIN_PATH } from "./index.enum";
import MoviesGridSkeleton from "@/pages/movies/components/MovieGridSkeleton";
const HomeView = lazy(() => import("@/pages/home/views"));
const AboutView = lazy(() => import("@/pages/about/views"));
const MoviesView = lazy(() => import("@/pages/movies/views"));
const FavoritesView = lazy(() => import("@/pages/favorites/views"));

export const MAIN_ROUTES = [
  <Route
    key={MAIN_PATH.HOME}
    path={MAIN_PATH.HOME}
    element={
      <Suspense fallback={<Loading />}>
        <HomeView />
      </Suspense>
    }
  ></Route>,
  <Route
    key={MAIN_PATH.ABOUT}
    path={MAIN_PATH.ABOUT}
    element={
      <Suspense fallback={<Loading />}>
        <AboutView />
      </Suspense>
    }
  ></Route>,
  <Route
    key={MAIN_PATH.MOVIES}
    path={MAIN_PATH.MOVIES}
    element={
      <Suspense fallback={<MoviesGridSkeleton count={15} />}>
        <MoviesView />
      </Suspense>
    }
  ></Route>,
  <Route
    key={MAIN_PATH.FAVORITES}
    path={MAIN_PATH.FAVORITES}
    element={
      <Suspense fallback={<Loading />}>
        <FavoritesView />
      </Suspense>
    }
  ></Route>,
];
