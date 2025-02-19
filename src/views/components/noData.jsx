import React from "react";
import { Stack, Typography } from "@mui/material";

const NoDataComponent = ({ height = "100%" }) => (
  <Stack width="100%" height={height} justifyContent="center" alignContent="center">
    <Typography textAlign="center">No Data Added !</Typography>
  </Stack>
);
export default NoDataComponent;
