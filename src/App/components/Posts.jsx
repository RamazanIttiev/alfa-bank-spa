/* eslint-disable no-nested-ternary */
import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import { getPosts } from '../services';
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

const EmptyMessage = styled(Typography).attrs({
  variant: 'h1',
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoadingBar = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 10px;
`;

const Posts = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      getPosts(dispatch, setLoading);
    })();
  }, []);

  const posts = useSelector(state => state.posts);
  const favouritesIds = useSelector(state => state.favourites);

  const favourites = posts.filter(post => favouritesIds.indexOf(post.id) >= 0);

  const activePosts = value === 0 ? posts : favourites;

  if (loading) {
    return (
      <LoadingBar>
        <ReactLoading type="bubbles" color="#fff" />
      </LoadingBar>
    );
  }
  return (
    <Base>
      <ToggleButtons value={value} setValue={setValue} />
      <PostsWrapper container>
        {favourites.length === 0 && value === 1 ? (
          <EmptyMessage>Favourite list is empty</EmptyMessage>
        ) : posts.length === 0 && value === 0 ? (
          <EmptyMessage>You do not have any posts</EmptyMessage>
        ) : (
          activePosts.map(post => (
            <Grid key={post.id} item>
              <Post isFavourite={favouritesIds.indexOf(post.id) >= 0} {...post} />
            </Grid>
          ))
        )}
      </PostsWrapper>
    </Base>
  );
};

export default Posts;
