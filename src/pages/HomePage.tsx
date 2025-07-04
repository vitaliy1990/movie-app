import Header from '../components/Header/Header';
import MovieResults from '../components/MovieResults/MovieResults';
import SearchSection from '../components/SearchSection/SearchSection';

const HomePage = () => {
  return (
    <>
      <Header />
      <SearchSection />
      <MovieResults />
    </>
  );
};

export default HomePage;
