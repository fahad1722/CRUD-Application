/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import { editUser, getUser } from "../API/api";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 10px;
  }
`;
const defaultValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
  company: "",
  designation: "",
};
const EditUser = () => {
  const [user, setUser] = useState(defaultValue);
  const { name, username, email, phone, company, designation } = user;
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
  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name : </InputLabel>
        <Input onChange={onValueChange} name="name" value={name} />
      </FormControl>
      <FormControl>
        <InputLabel>UserName : </InputLabel>
        <Input onChange={onValueChange} name="username" value={username} />
      </FormControl>
      <FormControl>
        <InputLabel>Email : </InputLabel>
        <Input onChange={onValueChange} name="email" value={email} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone : </InputLabel>
        <Input onChange={onValueChange} name="phone" value={phone} />
      </FormControl>
      <FormControl>
        <InputLabel>Company: </InputLabel>
        <Input onChange={onValueChange} name="company" value={company} />
      </FormControl>
      <FormControl>
        <InputLabel>Designtaion: </InputLabel>
        <Input
          onChange={onValueChange}
          name="designation"
          value={designation}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => editUserDetails()}>
          EDIT USER
        </Button>
      </FormControl>
    </Container>
  );
};
export default EditUser;
