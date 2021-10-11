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

import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import styled from 'styled-components';
import City from '../../assets/storm.jpeg';

const Base = styled(Card)`
  max-width: 345px;
  border-radius: 16px;
`;

const UserCard = () => (
  <Base>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia component="img" height="194" image={City} alt="Paella dish" />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook together with your
        guests. Add 1 cup of frozen peas along with the mussels, if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
    </CardActions>
  </Base>
);
export default UserCard;
