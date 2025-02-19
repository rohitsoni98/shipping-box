import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box,
  TableContainer,
  Typography,
} from "@mui/material";
import NoDataComponent from "../../components/noData";
import { destinations } from "../../../helper/constants/addBox";

// Utility function to calculate shipping cost
const calculateShippingCost = (weight, destination) =>
  (parseFloat(weight) * destinations[destination]).toFixed(2);

// BoxRow Component for better reusability
const BoxRow = ({ box }) => {
  return (
    <TableRow>
      <TableCell>{box.name}</TableCell>
      <TableCell>{box.weight}</TableCell>
      <TableCell>
        <Box
          sx={{
            width: 30,
            height: 20,
            backgroundColor: box.color,
            border: "0.5px solid grey",
          }}
        />
      </TableCell>
      <TableCell>{box.destination}</TableCell>
      <TableCell>
        {calculateShippingCost(box.weight, box.destination)}
      </TableCell>
    </TableRow>
  );
};

const BoxList = () => {
  const boxes = useSelector((state) => state.boxes.boxes);

  return (
    <Container sx={{ mt: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Box List
      </Typography>
      <Paper sx={{ mt: 2 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Receiver Name</TableCell>
                <TableCell>Weight (kg)</TableCell>
                <TableCell>Box Color</TableCell>
                <TableCell>Destination</TableCell>
                <TableCell>Shipping Cost (INR)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {boxes.map((box, index) => (
                <BoxRow key={`table-body-cell${index + 1}`} box={box} />
              ))}
            </TableBody>
          </Table>
          {!boxes?.length && <NoDataComponent height="40vh" />}
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default BoxList;
