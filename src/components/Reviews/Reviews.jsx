import Notification from 'components/Notification';
import { fetchMovieDetsById } from 'Helpers/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, Item, TextContainer, Author, Review } from './Reviews.styled';

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
      } catch (err) {
        console.error(err);
      }
    };
    getReviewsData();
    return () => controller.abort();
  }, [movieId]);
  return (
    <>
      {review && !!review.length ? (
        <List>
          {review.map(({ author, content, id }) => {
            return (
              <Item key={id}>
                <TextContainer>
                  Author:<Author> {author}</Author>
                </TextContainer>

                <Review>{content}</Review>
              </Item>
            );
          })}
        </List>
      ) : (
        <Notification message="There are no reviews here" />
      )}
    </>
  );
};
export default Reviews;
