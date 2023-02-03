import { fetchMovieDetsById } from 'Helpers/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [review, setReview] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const option = { signal: controller.signal };
    const getReviewsData = async () => {
      try {
        const resp = await fetchMovieDetsById(movieId, '/reviews', option);
        setReview(resp.results);
        console.log(resp.results);
      } catch (err) {
        console.log(err);
      }
    };
    controller.abort();
    getReviewsData();
  }, [movieId]);
  return (
    <ul>
      {review &&
        review.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
    </ul>
  );
};
export default Reviews;
