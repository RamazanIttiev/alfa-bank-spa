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

  return (
    <Box>
      <Base container spacing={5}>
        {posts.length > 0 &&
          posts.map(user => (
            <Grid item>
              <Post key={user.id} {...user} />
            </Grid>
          ))}
      </Base>
    </Box>
  );
};

export default Posts;
