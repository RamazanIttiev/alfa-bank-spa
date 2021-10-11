import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getUsers } from '../services';
import { mapPosts } from '../services/mappers';
import { setPosts } from '../store/postsSlice';
import Post from './Post';
import ToggleButtons from './ToggleButtons';

const Base = styled(Grid).attrs({
  maxWidth: 'lg',
})`
  margin: 0 auto;
`;

const Posts = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  useEffect(async () => {
    const posts = await getUsers();
    dispatch(setPosts(mapPosts(posts)));
  }, []);

  const posts = useSelector(state => state.posts.posts);
  const favourites = useSelector(state => state.favourites);

  const favouritePosts = posts.filter(post => favourites.indexOf(post.id) >= 0);

  const togglePosts = value === 0 ? posts : favouritePosts;

  return (
    <Box padding="8px">
      <ToggleButtons value={value} setValue={setValue} />
      <Base container spacing={5}>
        {togglePosts.map(post => (
          <Grid key={post.id} item>
            <Post isFavourite={favourites.indexOf(post.id) >= 0} {...post} />
          </Grid>
        ))}
      </Base>
    </Box>
  );
};

export default Posts;
