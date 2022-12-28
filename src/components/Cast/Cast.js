import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from '../../api-service';
import Box from 'components/Box';
import { List, Item, Image } from './Cast.styled';
import { toast } from 'react-toastify';
import defaultImg from '../image/defaultImg.png';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);


  useEffect(() => {
    const fetchCastMovie = async id => {
      try {
        const casts = await API.fetchCast(id);
        if (casts.length === 0) {
          toast("We don't found any cast");
        }
        setCast(casts);
      } catch (error) {
        console.log('error');
      }
    };
    fetchCastMovie(movieId);
  }, [movieId]);

  return (
    <Box as="section">
      <List>
        {cast.map(({ id, profile_path, name, character }) => {
          return (
            <Item key={id}>
              <Image
                src={profile_path? `https://image.tmdb.org/t/p/w500${profile_path}` : defaultImg}
                alt={name}
              />
              <p>{name}</p>
              <p>{character}</p>
            </Item>
          );
        })}
      </List>
    </Box>
  );
};

export default Cast;
