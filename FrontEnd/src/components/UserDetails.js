import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  styled,
  Box,
} from "@mui/material";
import { useLocation } from "react-router-dom";

const Fahad = styled("div")`
  background-color: aliceblue;
`;
const StyledTable = styled(Table)`
  width: 50%;
  margin: 50px auto;
  border: 4px solid black;
  background-color: white;
`;

const TableHeader = styled(TableHead)`
  background-color: black;
`;

const TableData = styled(TableCell)`
  font-size: 1.2rem;
  padding: 16px;
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
        User Details:
      </Typography>
    </Box>
  );
};

const UserDetails = () => {
  const { state } = useLocation();

  return (
    <Fahad>
      <Title />

      <StyledTable>
        <TableHeader>
          <TableRow>
            <TableData style={{ color: "white", fontSize: "1.6rem" }}>
              Field
            </TableData>
            <TableData style={{ color: "white", fontSize: "1.6rem" }}>
              Value
            </TableData>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableData style={{ fontWeight: "bold" }}>Name : </TableData>
            <TableData>{state.user.name}</TableData>
          </TableRow>
          <TableRow>
            <TableData style={{ fontWeight: "bold" }}>Username : </TableData>
            <TableData>{state.user.username}</TableData>
          </TableRow>
          <TableRow>
            <TableData style={{ fontWeight: "bold" }}>Email : </TableData>
            <TableData>{state.user.email}</TableData>
          </TableRow>
          <TableRow>
            <TableData style={{ fontWeight: "bold" }}>Phone : </TableData>
            <TableData>{state.user.phone}</TableData>
          </TableRow>
          <TableRow>
            <TableData style={{ fontWeight: "bold" }}>Company : </TableData>
            <TableData>{state.user.company}</TableData>
          </TableRow>
          <TableRow>
            <TableData style={{ fontWeight: "bold" }}>Designtaion : </TableData>
            <TableData>{state.user.designation}</TableData>
          </TableRow>
        </TableBody>
      </StyledTable>
    </Fahad>
  );
};

export default UserDetails;

// import { Typography } from "@mui/material";
// import { useLocation } from "react-router-dom";

// const UserDetails = () => {
//   const { state } = useLocation();

//   return (
//     <div>
//       <Typography variant="h4">User Details:</Typography>
//       <Typography>Name: {state.user.name}</Typography>
//       <Typography>Username: {state.user.username}</Typography>
//       <Typography>Email: {state.user.email}</Typography>
//       <Typography>Phone: {state.user.phone}</Typography>
//     </div>
//   );
// };

// export default UserDetails;
