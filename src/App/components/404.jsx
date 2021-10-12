import { Button, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Message = styled(Typography).attrs({
  variant: 'h1',
})``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  &.css-dejen1-MuiButtonBase-root-MuiButton-root {
    font-weight: 700;
    margin-top: 24px;
    color: #000;
    background: ${props => props.theme.palette.primary.main};

    &:hover {
      background: ${props => props.theme.palette.background.hover};
    }
  }
`;

const ErrorPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <Base>
      <Wrapper>
        <Message>This page does not seem to exist</Message>
        <StyledButton onClick={handleClick}>Go back</StyledButton>
      </Wrapper>
    </Base>
  );
};

export default ErrorPage;
