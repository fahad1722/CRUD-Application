import {
  TableHead,
  Table,
  TableCell,
  TableBody,
  TableRow,
  styled,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../API/api";
import { Link, useNavigate } from "react-router-dom";
const StyledTable = styled(Table)`
  width: 99%;
  margin: 50px auto 0 auto;
`;
const Thead = styled(TableRow)`
  background: #000000;
  & > th {
    color: white;
    font-size: 20px;
  }
`;

const TBody = styled(TableRow)`
  & > td {
    font-size: 15px;
  }
`;

const Title = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="black"
      padding="5px"
    >
      <Typography variant="h3" color="white">
        All User Details
      </Typography>
    </Box>
  );
};
const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const resp = await getUsers();
      if (resp && resp.data) {
        setUsers(resp.data);
      }
    } catch (error) {
      console.log("Error while getting all users", error);
    }
  };
  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };
  // const handleUserInfo = (user) => {
  //     alert(
  //       `Name: ${user.name}\nUsername: ${user.username}\nEmail: ${user.email}\nPhone: ${user.phone}`
  //     );
  //   };

  const navigate = useNavigate();
  const handleUserInfo = (user) => {
    navigate("/userdetails", { state: { user: user } });
  };

  return (
    <>
      <Title />
      <StyledTable>
        <TableHead>
          <Thead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Designtaion</TableCell>
            <TableCell></TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {users.map((user1) => (
            <TBody key={user1._id}>
              <TableCell>{user1._id}</TableCell>
              <TableCell>{user1.name}</TableCell>
              <TableCell>{user1.username}</TableCell>
              <TableCell>{user1.email}</TableCell>
              <TableCell>{user1.phone}</TableCell>
              <TableCell>{user1.company}</TableCell>
              <TableCell>{user1.designation}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  style={{ marginRight: 10 }}
                  component={Link}
                  to={`/edit/${user1._id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  style={{ marginRight: 10 }}
                  color="secondary"
                  onClick={() => deleteUserDetails(user1._id)}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  onClick={() => handleUserInfo(user1)}
                >
                  Show Info
                </Button>
              </TableCell>
            </TBody>
          ))}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default AllUsers;
