/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Container,
  Button,
  Box
} from "@mui/material";
import { useState, useEffect } from "react";
import { editUser, getUser } from "../API/api";
import { useNavigate, useParams } from "react-router-dom";


const defaultValue = {
  name: "",
  email: "",
  phone: "",
  college: "",

};
const EditUser = () => {
  const [user, setUser] = useState(defaultValue);
  const { name, email, phone, college } = user;
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);
  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data);
  };
  const editUserDetails = async () => {
    await editUser(user, id);
    navigate("/all");
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
          Update User Details
        </Typography>
      </Box>
    );
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
            <Input onChange={onValueChange} name="name" value={name} />
          </FormControl>

          <FormControl style={{ margin: '10px 0' }}>
            <InputLabel>Email : </InputLabel>
            <Input onChange={onValueChange} name="email" value={email} />
          </FormControl>

          <FormControl style={{ margin: '10px 0' }}>
            <InputLabel>Phone : </InputLabel>
            <Input onChange={onValueChange} name="phone" value={phone} />
          </FormControl>

          <FormControl style={{ margin: '10px 0' }}>
            <InputLabel>College : </InputLabel>
            <Input onChange={onValueChange} name="college" value={college} />
          </FormControl>

          <FormControl style={{ margin: '10px 0' }}>
            <Button variant="contained" onClick={() => editUserDetails()}>
              EDIT USER
            </Button>
          </FormControl>
        </FormGroup>
      </Box>
    </Container>
  );
};
export default EditUser;
