import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from '../../api-service';
import Box from 'components/Box';
import { toast } from 'react-toastify';
import { List, Title, Text } from './Reviews.styled';

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
      <List>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <Title>{author}</Title>
              <Text>{content}</Text>
            </li>
          );
        })}
      </List>
    </Box>
  );
};

export default Reviews;
