import Button from 'components/Button';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import { Form, Input, Label } from './SearchMovieBox.styled';

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
    <Form
      onSubmit={e => {
        e.preventDefault();
        const form = e.currentTarget;
        const value = form.elements.movieName.value;
        return onSubmit(value);
      }}
    >
      <Label>
        Enter name of your movie
        <Input
          name="movieName"
          type="text"
          placeholder="Enter the movie name"
          onChange={handleChange}
          onFocus={handleFocus}
          autoComplete="true"
          value={query}
        />
      </Label>
      <Button type="submit" variant="default" text="Search" />
    </Form>
  );
};
SearchMovieBox.propTypes = {
  searchParams: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};
export default SearchMovieBox;
