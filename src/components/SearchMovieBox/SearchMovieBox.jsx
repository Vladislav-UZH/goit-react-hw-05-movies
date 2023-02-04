import Button from 'components/Button';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';

const SearchMovieBox = ({ searchParams, onSubmit }) => {
  const [query, setQuery] = useState('');
  const searchMovieName = searchParams.get('name') ?? '';
  useEffect(() => {
    setQuery(searchMovieName);
  }, [searchMovieName]);
  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };
  const handleFocus = e => {
    e.target.select();
  };
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const form = e.currentTarget;
        const value = form.elements.movieName.value;
        return onSubmit(value);
      }}
    >
      <label>
        Enter name of your movie
        <input
          name="movieName"
          type="text"
          onChange={handleChange}
          onFocus={handleFocus}
          autoComplete="true"
          value={query}
        />
      </label>
      <Button type="submit" variant="default" text="Search" />
    </form>
  );
};
SearchMovieBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchMovieBox;
