import { Routes, Route } from 'react-router-dom';
import { Home } from 'Pages/Home/Home';
import { Movies } from 'Pages/Movies/Movies';
import { MovieDetails } from 'Pages/MovieDetails/MovieDetails';
import { NotFound } from 'Pages/NotFound/NotFound';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import SharedLayout from 'components/SharedLayout';
//

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />{' '}
      </Route>
    </Routes>
  );
};
