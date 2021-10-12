import React, { useState } from 'react';
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
import { Favorite, FavoriteBorder, HighlightOffOutlined } from '@mui/icons-material';
import { removeFavourites, addFavourites } from '../store/favouritesSlice';
import { deletePost } from '../services';

const Base = styled(Card).attrs({ sx: { letterSpacing: 2 } })`
  width: 345px;
  min-height: 420px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Post = ({ id, image, author, text, publishDate, isFavourite }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleFavourites = () => {
    if (!isFavourite) {
      dispatch(addFavourites(id));
    } else dispatch(removeFavourites(id));
  };

  const handleDelete = () => {
    (async () => {
      deletePost(id, dispatch);
    })();
    setLoading(true);
  };

  return (
    <Base>
      <CardHeader
        avatar={<Avatar alt={author.firstName} src={author.avatar} />}
        title={`${author.firstName} ${author.lastName}`}
        subheader={publishDate}
      />
      <CardMedia component="img" height="194" image={image} alt={text} />
      <CardContent>
        <Typography>{text}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleFavourites}>
          <Checkbox
            icon={<FavoriteBorder style={{ color: '#fff' }} />}
            checkedIcon={<Favorite />}
          />
        </IconButton>
        <IconButton disabled={loading} onClick={handleDelete}>
          <HighlightOffOutlined color="secondary" />
        </IconButton>
      </CardActions>
    </Base>
  );
};
export default Post;
