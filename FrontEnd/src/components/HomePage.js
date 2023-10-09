import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography, Box, Stack } from "@mui/material";
import image from './image.svg';

const LeftComponent = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginRight="40px"
    >
      <Box
        background="lightgray"
        padding="16px"
        borderRadius="8px"
        boxShadow="4px 4px 4px 4px rgba(0, 0, 0, 0.25)"
      >

        <Typography variant="body1" align="center" marginBottom={3}>
          This is a simple CRUD (Create, Read, Update, Delete) application
          that allows you to efficiently manage user information. With this app, you can:
        </Typography>
        <Typography variant="body2" align="left" color="black" marginBottom={1}>
          1. Create new user profiles
        </Typography>
        <Typography variant="body2" align="left" color="black" marginBottom={1}>
          2. Easily access and read information about all users
        </Typography>
        <Typography variant="body2" align="left" color="black" marginBottom={1}>
          3. Update user details, including name, email, phone, company, and designation
        </Typography>
        <Typography variant="body2" align="left" color="black" marginBottom={1}>
          4. Delete user profiles when they are no longer needed
        </Typography>


        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <Link to="/add" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" size="large">
              Create
            </Button>
          </Link>
          <Link to="/all" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="secondary" size="large">
              Read
            </Button>
          </Link>
        </Stack>
      </Box>

    </Box>
  );
};

const RightComponent = () => {
  return (
    <Box>
      <img
        src={image}
        alt="App Logo"
        style={{ width: "100%", height: "auto" }}
      />
    </Box>
  );
};

const HomePage = () => {
  return (
    <Container>
      <Box
        backgroundColor="primary.main"
        padding="16px"
        borderRadius="8px"
        boxShadow="0px 4px 4px 4px rgba(0, 0, 0, 0.25)"
        marginY="15px"
      >
        <Typography variant="h4" align="center" color="white">
          Welcome to My CRUD Application
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="17px"
      >
        <LeftComponent />
        <RightComponent />
      </Box>
    </Container>
  );
};

export default HomePage;
