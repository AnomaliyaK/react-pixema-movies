import { FiltersPage } from 'pages/FiltersPage/FiltersPage';
import { SettingsPage } from 'pages/SettingsPage/SettingsPage';
import { SortingPage } from 'pages/SortingPage/SortingPage';
import { TrendsPage } from 'pages/TrendsPage/TrendsPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { RequareAuth } from '../components/RequareAuth';
import { DetailsPage } from '../pages/DetailsPage';
import { FavoritesPage } from '../pages/FavoritesPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { SignInPage } from '../pages/SignInPage';
import { SignUpPage } from '../pages/SignUpPage';
import { MainTemplate } from '../templates/MainTemplate/MainTemplate';
import { ROUTE } from './routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.DETAILS} element={<DetailsPage />} />
      <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
      <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
      <Route path={ROUTE.SORTING} element={<SortingPage />} />
      <Route path={ROUTE.FILTERS} element={<FiltersPage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
      <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
      <Route element={<RequareAuth />}>
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
      </Route>
    </Route>
  )
);
