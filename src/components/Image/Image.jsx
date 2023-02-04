import PropTypes from 'prop-types';
import { Thumb } from './Image.styled';
const Image = ({ imgLink, alt, size }) => {
  const { width, height } = size;
  const BASE_LINK = 'https://image.tmdb.org/t/p/w400';
  const plug = `https://via.placeholder.com/${width}x${height}?text=Image+not+found`;
  return (
    <Thumb size={size}>
      <img
        src={imgLink ? `${BASE_LINK}${imgLink}` : plug}
        alt={alt}
        loading="lazy"
      />
    </Thumb>
  );
};
Image.propTypes = {
  imgLink: PropTypes.string,
  alt: PropTypes.string.isRequired,
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};
export default Image;
