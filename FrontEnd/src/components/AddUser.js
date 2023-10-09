import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
  Box,
  Container
} from "@mui/material";
import { useState } from "react";
import { addUser } from "../API/api";
import { useNavigate } from "react-router-dom";

const defaultValue = {
  name: "",
  email: "",
  phone: "",
  college: "",
};

const Title = () => {
  return (
    <Box
      bgcolor="primary.main"
      padding="8px"
      borderRadius="8px"
      boxShadow="4px 4px 4px 4px rgba(0, 0, 0, 0.25)"
      marginY="10px"
    >
      <Typography variant="h3" align="center" color="white">
        Create User
      </Typography>
    </Box>
  );
};

const AddUser = () => {
  const [user, setUser] = useState(defaultValue);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all");
  };

  return (
    <Container>
      <Title />
      <Box
        bgcolor="white"
        padding="16px"
        borderRadius="8px"
        boxShadow="4px 4px 4px 4px rgba(0, 0, 0, 0.25)"
        textAlign="center"
        width="50%"
        margin="50px auto"
      >
        <FormGroup>
          <FormControl style={{ margin: '10px 0' }}>
            <InputLabel>Name : </InputLabel>
            <Input onChange={onValueChange} name="name" />
          </FormControl>

          <FormControl style={{ margin: '10px 0' }}>
            <InputLabel>Email : </InputLabel>
            <Input onChange={onValueChange} name="email" />
          </FormControl>

          <FormControl style={{ margin: '10px 0' }}>
            <InputLabel>Phone : </InputLabel>
            <Input onChange={onValueChange} name="phone" />
          </FormControl>

          <FormControl style={{ margin: '10px 0' }}>
            <InputLabel>College : </InputLabel>
            <Input onChange={onValueChange} name="college" />
          </FormControl>

          <FormControl style={{ margin: '10px 0' }}>
            <Button variant="contained" onClick={addUserDetails}>
              ADD
            </Button>
          </FormControl>
        </FormGroup>
      </Box>
    </Container>
  );
};

export default AddUser;
