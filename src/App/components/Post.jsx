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
  Checkbox,
} from '@mui/material';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { removeFavourites, addFavourites } from '../store/favouritesSlice';

const Base = styled(Card)`
  max-width: 345px;
  border-radius: 16px;
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
          <Checkbox
            icon={<FavoriteBorder style={{ color: '#fff' }} />}
            checkedIcon={<Favorite />}
          />
        </IconButton>
      </CardActions>
    </Base>
  );
};
export default Post;
