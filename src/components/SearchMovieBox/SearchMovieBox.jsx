import Button from 'components/Button';
import PropTypes from 'prop-types';

const SearchMovieBox = ({ value, onChange }) => {
  console.log('maybe here');
  return (
    <form>
      <label>
        Enter name of your movie
        <input type="text" value={value} onChange={onChange} />
      </label>
      <Button type="submit" variant="default" text="Search" />
    </form>
  );
};
SearchMovieBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default SearchMovieBox;
