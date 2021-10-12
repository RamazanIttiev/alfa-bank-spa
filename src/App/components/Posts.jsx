import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getUsers } from '../services';
import { mapPosts } from '../services/mappers';
import { setPosts } from '../store/postsSlice';
import Post from './Post';
import ToggleButtons from './ToggleButtons';

const Base = styled(Box).attrs({
  padding: '8px',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostsWrapper = styled(Grid).attrs({
  maxWidth: 'lg',
  spacing: 5,
})``;

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
    <Base>
      <ToggleButtons value={value} setValue={setValue} />
      <PostsWrapper container>
        {togglePosts.map(post => (
          <Grid key={post.id} item>
            <Post isFavourite={favourites.indexOf(post.id) >= 0} {...post} />
          </Grid>
        ))}
      </PostsWrapper>
    </Base>
  );
};

export default Posts;
