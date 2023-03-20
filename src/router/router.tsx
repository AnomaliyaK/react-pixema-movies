import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { RequareAuth } from 'components';

import {
  DetailsPage,
  FavoritesPage,
  FiltersPage,
  HomePage,
  SearchPage,
  SettingsPage,
  SignInPage,
  SignUpPage,
  SortingPage,
  TrendsPage,
} from 'pages';

import { MainTemplate } from 'templates';

// при импорте из папки перестает работать
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
