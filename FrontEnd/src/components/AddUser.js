import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useState } from "react";
import { addUser } from "../API/api";
import { useNavigate } from "react-router-dom";
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
const AddUser = () => {
  const [user, setUser] = useState(defaultValue);
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const navigate = useNavigate();
  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all");
  };
  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name : </InputLabel>
        <Input onChange={onValueChange} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>UserName : </InputLabel>
        <Input onChange={onValueChange} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Email : </InputLabel>
        <Input onChange={onValueChange} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone : </InputLabel>
        <Input onChange={onValueChange} name="phone" />
      </FormControl>
      <FormControl>
        <InputLabel>Company: </InputLabel>
        <Input onChange={onValueChange} name="company" />
      </FormControl>
      <FormControl>
        <InputLabel>Designtaion: </InputLabel>
        <Input onChange={onValueChange} name="designation" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>
          ADD USER
        </Button>
      </FormControl>
    </Container>
  );
};
export default AddUser;
