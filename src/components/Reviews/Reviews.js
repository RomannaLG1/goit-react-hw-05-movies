import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from '../../api-service';
import Box from 'components/Box';
import { toast } from 'react-toastify';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async id => {
      try {
        const review = await API.fetchReviews(id);
        if (review.length === 0) {
         toast("We don't found any reviews");
       }
        setReviews(review);
      } catch (error) {
        console.log('error');
      }
    };
    fetchMovieReviews(movieId);
  }, [movieId]);

  return (
    <Box as="section">
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default Reviews;
