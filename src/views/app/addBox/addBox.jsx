import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addBox } from "../../../redux/actions/boxActions";
import {
  Container,
  TextField,
  MenuItem,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { destinations } from "../../../helper/constants/addBox";

const commonProp = { size: "small" };
const initialState = {
  name: "",
  weight: "",
  color: "#ffffff",
  destination: "Sweden",
};

const AddBox = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    const isWeightNameField = name === "weight";
    if (isWeightNameField && isNaN(value)) return;
    setFormData((prev) => ({
      ...prev,
      [name]: isWeightNameField ? value.trim() : value,
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, weight } = formData;
    const trimmedName = name.trim();
    const trimmedWeight = weight.trim();
    const parsedWeight = parseFloat(trimmedWeight);

    if (
      !trimmedName ||
      trimmedWeight === "" ||
      isNaN(parsedWeight) ||
      parsedWeight <= 0
    ) {
      setError("All fields are required and weight must be a positive number.");
      return;
    }

    dispatch(addBox({ ...formData, name: trimmedName, weight: trimmedWeight }));
    setFormData(initialState);
    setError("");
  };

  return (
    <Container sx={{ mt: "12px" }}>
      <Typography variant="h6">Add Shipping Box</Typography>
      {error && <Typography color="error">{error}</Typography>}

      <Stack mt="12px" component="form" spacing={2} onSubmit={handleSubmit}>
        <TextField
          {...commonProp}
          label="Receiver Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          {...commonProp}
          label="Weight (kg)"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
        />
        <TextField
          {...commonProp}
          select
          label="Destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
        >
          {Object.keys(destinations).map((country) => (
            <MenuItem key={country} value={country}>
              {country}
            </MenuItem>
          ))}
        </TextField>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <input
            type="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            style={{ width: "100px", cursor: "pointer" }}
          />
          <Typography>Select Color</Typography>
        </Stack>

        <Stack alignItems="center">
          <Button type="submit" variant="contained">
            Save
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AddBox;
