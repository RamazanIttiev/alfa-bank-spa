import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getUsers } from '../services';
import { mapPosts } from '../services/mappers';
import { setPosts } from '../store/postsSlice';
import Post from './Post';

const Base = styled(Grid).attrs({
  maxWidth: 'lg',
})`
  margin: 0 auto;
`;

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    const posts = await getUsers();
    dispatch(setPosts(mapPosts(posts)));
  }, []);

  const posts = useSelector(state => state.posts);
  const favourites = useSelector(state => state.favourites);
  const filtered = posts.filter(post => favourites.indexOf(post.id) >= 0);

  return (
    <Box>
      <Base container spacing={5}>
        {posts.length > 0 &&
          posts.map(post => (
            <Grid key={post.id} item>
              <Post isFavourite={favourites.indexOf(post.id) >= 0} {...post} />
            </Grid>
          ))}
      </Base>
    </Box>
  );
};

export default Posts;
