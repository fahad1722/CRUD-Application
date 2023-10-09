import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Box,
  Container,
  TableContainer,
  Paper,
} from "@mui/material";
import { useLocation } from "react-router-dom";

const TableData = {
  fontSize: "1.2rem",
  padding: "16px",
  color: "black",
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
        User Detail
      </Typography>
    </Box>
  );
};

const UserDetails = () => {
  const { state } = useLocation();

  return (
    <Container>
      <Title />
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell style={{ ...TableData, fontWeight: "bold" }}>
                Name:
              </TableCell>
              <TableCell style={TableData}>{state.user.name}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ ...TableData, fontWeight: "bold" }}>
                Email:
              </TableCell>
              <TableCell style={TableData}>{state.user.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...TableData, fontWeight: "bold" }}>
                Phone:
              </TableCell>
              <TableCell style={TableData}>{state.user.phone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...TableData, fontWeight: "bold" }}>
                College:
              </TableCell>
              <TableCell style={TableData}>{state.user.college}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default UserDetails;
