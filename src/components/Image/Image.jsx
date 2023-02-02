import PropTypes from 'prop-types';
import { Thumb } from './Image.styled';
const Image = ({ imgLink, alt, size }) => {
  const BASE_LINK = 'https://image.tmdb.org/t/p/w400/';
  const plug = '';
  return (
    <Thumb size={size}>
      <img src={imgLink ? `${BASE_LINK}${imgLink}` : plug} alt={alt} />
    </Thumb>
  );
};
Image.propTypes = {
  imgLink: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  }).isRequired,
};
export default Image;
