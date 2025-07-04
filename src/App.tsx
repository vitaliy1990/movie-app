import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import GenresProvider from "./components/GenresProvider/GenresProvider";
import { useGenres } from "./hooks/useGenres";
import Loader from "./components/Loader/Loader";
import { Toaster } from "react-hot-toast";

const AppContainer = () => {
  const { isLoading } = useGenres();

  if (isLoading) {
    return <Loader rootClassName="h-dvh" />;
  }

  return (
    <div className="max-w-[1200px] mx-auto p-4 md:p-8 flex flex-col gap-8">
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
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
