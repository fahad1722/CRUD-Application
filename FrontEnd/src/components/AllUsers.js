import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../API/api";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
const StyledTableHead = styled(TableHead)`
  background-color: black;
  & .MuiTableCell-root {
    color: white;
    font-size: 20px;
  }
`;


const Title = () => {
  return (
    <Box
      backgroundColor="primary.main"
      padding="8px"
      borderRadius="8px"
      boxShadow="4px 4px 4px 4px rgba(0, 0, 0, 0.25)"
      marginY="10px"
    >
      <Typography variant="h3" align="center" color="white">
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

  const navigate = useNavigate();
  const handleUserInfo = (user) => {
    navigate("/userdetails", { state: { user: user } });
  };

  return (
    <Container>
      <Title />
      <TableContainer component={Paper}>
        <Table>
          <StyledTableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>College</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user._id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.college}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="warning"
                    component={Link}
                    to={`/edit/${user._id}`}
                    style={{ marginRight: 10 }}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleUserInfo(user)}
                    style={{ marginRight: 10 }}
                  >
                    Read
                  </Button>

                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteUserDetails(user._id)}
                  >
                    Delete
                  </Button>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AllUsers;
