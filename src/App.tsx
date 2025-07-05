import { lazy, Suspense } from 'react';

import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import GenresProvider from './components/GenresProvider/GenresProvider';
import Loader from './components/Loader/Loader';
import { useGenres } from './hooks/useGenres';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';

const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const AppContainer = () => {
  const { isLoading } = useGenres();

  if (isLoading) {
    return <Loader rootClassName='h-dvh' />;
  }

  return (
    <div className='mx-auto flex h-full min-h-dvh max-w-[1200px] flex-col gap-8 p-4 md:p-8'>
      <Toaster position='top-center' />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/movies/:id'
          element={<MoviePage />}
        />
        <Route
          path='/not-found'
          element={
            <Suspense fallback={<Loader rootClassName='h-dvh' />}>
              <NotFoundPage />
            </Suspense>
          }
        />
        <Route
          path='*'
          element={
            <Navigate
              to='/'
              replace
            />
          }
        />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <GenresProvider>
          <AppContainer />
        </GenresProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
