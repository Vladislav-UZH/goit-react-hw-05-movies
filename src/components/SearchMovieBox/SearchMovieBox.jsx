import Button from 'components/Button';
import PropTypes from 'prop-types';

const SearchMovieBox = ({ onSubmit }) => {
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
        <input name="movieName" type="text" />
      </label>
      <Button type="submit" variant="default" text="Search" />
    </form>
  );
};
SearchMovieBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchMovieBox;
