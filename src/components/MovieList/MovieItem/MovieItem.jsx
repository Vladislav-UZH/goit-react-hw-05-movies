import Image from 'components/Image';
import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';
import { Item, FilmWrapper, Title, MovieLink } from './MovieItem.styled';
const MovieItem = ({ poster, title, id }) => {
  const location = useLocation();
  return (
    <Item>
      <MovieLink to={`/movies/${id}`} state={{ from: location }}>
        <Image
          imgLink={poster}
          alt={title}
          size={{ width: 365, height: 450 }}
        />

        <FilmWrapper>
          <Title>"{title}"</Title>
        </FilmWrapper>
      </MovieLink>
    </Item>
  );
};
MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
};
export default MovieItem;
