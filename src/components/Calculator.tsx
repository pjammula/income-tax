// src/components/Calculator.tsx

import React, { useState } from "react";
import { TextField, Button, Typography, Paper, Box } from "@mui/material";
import { calculateIncomeTax } from "../utils/taxUtils";

const Calculator: React.FC = () => {
  const [income, setIncome] = useState<string>("");
  const [tax, setTax] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncome(e.target.value);
  };

  const handleCalculateTax = () => {
    const taxAmount = calculateIncomeTax(Number(income));
    setTax(taxAmount);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Paper elevation={3} sx={{ padding: 4, width: "100%", maxWidth: 400 }}>
        <Typography variant="h5" gutterBottom>
          Income Tax Calculator (2025 Regime)
        </Typography>
        <TextField
          label="Enter Annual Income (INR)"
          variant="outlined"
          fullWidth
          value={income}
          onChange={handleChange}
          type="number"
          sx={{ marginBottom: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleCalculateTax}
        >
          Calculate Tax
        </Button>
        {tax !== null && (
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Total Tax: ₹{tax.toFixed(2)}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default Calculator;
