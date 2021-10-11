import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from '@mui/material';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Heart from '../../assets/Heart.svg';
import { removeFavourites, addFavourites } from '../store/favouritesSlice';

const Base = styled(Card)`
  max-width: 345px;
  border-radius: 16px;
`;

const Favorite = styled.img`
  filter: ${props =>
    props.colored
      ? 'invert(98%) sepia(50%) saturate(1141%) hue-rotate(318deg) brightness(106%) contrast(105%);'
      : 'invert(100%) sepia(0%) saturate(0%) hue-rotate(67deg) brightness(113%) contrast(101%);'}

  &:hover {
    filter: invert(98%) sepia(50%) saturate(1141%) hue-rotate(318deg) brightness(106%) contrast(105%);
  }
`;

const Post = ({ id, image, owner, text, publishDate, isFavourite }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!isFavourite) {
      dispatch(addFavourites(id));
    } else dispatch(removeFavourites(id));
  };
  return (
    <Base>
      <CardHeader
        avatar={<Avatar alt={owner.firstName} src={owner.avatar} />}
        title={`${owner.firstName} ${owner.lastName}`}
        subheader={publishDate}
      />
      <CardMedia component="img" height="194" image={image} alt={text} />
      <CardContent>
        <Typography>{text}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleClick}>
          <Favorite src={Heart} colored={isFavourite} alt="Add to favourites" />
        </IconButton>
      </CardActions>
    </Base>
  );
};
export default Post;
