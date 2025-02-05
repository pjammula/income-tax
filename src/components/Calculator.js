import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Calculator.tsx
import { useState } from "react";
import { TextField, Button, Typography, Paper, Box } from "@mui/material";
import { calculateIncomeTax } from "../utils/taxUtils";
const Calculator = () => {
    const [income, setIncome] = useState("");
    const [tax, setTax] = useState(null);
    const handleChange = (e) => {
        setIncome(e.target.value);
    };
    const handleCalculateTax = () => {
        const taxAmount = calculateIncomeTax(Number(income));
        setTax(taxAmount);
    };
    return (_jsx(Box, { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", children: _jsxs(Paper, { elevation: 3, sx: { padding: 4, width: "100%", maxWidth: 400 }, children: [_jsx(Typography, { variant: "h5", gutterBottom: true, children: "Income Tax Calculator (2025 Regime)" }), _jsx(TextField, { label: "Enter Annual Income (INR)", variant: "outlined", fullWidth: true, value: income, onChange: handleChange, type: "number", sx: { marginBottom: 2 } }), _jsx(Button, { variant: "contained", color: "primary", fullWidth: true, onClick: handleCalculateTax, children: "Calculate Tax" }), tax !== null && (_jsxs(Typography, { variant: "h6", sx: { marginTop: 2 }, children: ["Total Tax: \u20B9", tax.toFixed(2)] }))] }) }));
};
export default Calculator;
