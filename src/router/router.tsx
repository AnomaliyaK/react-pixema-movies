import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { RequareAuth } from "components";
import {
  MovieDetailsPage,
  FavoritesPage,
  HomePage,
  SettingsPage,
  SignInPage,
  SignUpPage,
  TrendsPage,
  ResetPasswordPage,
  SearchPage,
} from "pages";
import { AuthTemplate, MainTemplate } from "templates";
import { ROUTE } from "router";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.DETAILS} element={<MovieDetailsPage />} />
        <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route element={<RequareAuth />}>
          <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
          <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
        </Route>
      </Route>
      <Route path={ROUTE.SIGN_IN} element={<AuthTemplate />}>
        <Route index element={<SignInPage />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />} />
      </Route>
    </>,
  ),
  { basename: "/react-pixema-movies" },
);
