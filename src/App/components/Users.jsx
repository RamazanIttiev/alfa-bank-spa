import { Box, Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';

const Base = styled(Grid).attrs({
  maxWidth: 'lg',
})`
  margin: 0 auto;
`;

const Users = () => (
  <Box>
    <Base container spacing={5}>
      <Grid item>
        <UserCard />
      </Grid>
      <Grid item>
        <UserCard />
      </Grid>
      <Grid item>
        <UserCard />
      </Grid>
      <Grid item>
        <UserCard />
      </Grid>
    </Base>
  </Box>
);

export default Users;
