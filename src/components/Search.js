import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Search.tsx
import { useState } from "react";
import Fuse from "fuse.js";
import { TextField, Button, Typography } from "@mui/material";
const Search = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const keywords = [
        "income tax",
        "income tax 2025",
        "new tax regime",
        "india",
        "india income tax 2025",
    ];
    // Set up fuzzy search using fuse.js
    const fuse = new Fuse(keywords, {
        includeScore: true,
        threshold: 0.3, // Adjust the threshold for how "fuzzy" the search should be
    });
    const handleSearch = () => {
        const result = fuse.search(query);
        setResults(result.map(({ item }) => item)); // Extract matched items
    };
    return (_jsxs("div", { children: [_jsx(TextField, { label: "Search Keywords", value: query, onChange: (e) => setQuery(e.target.value), fullWidth: true }), _jsx(Button, { variant: "contained", onClick: handleSearch, sx: { marginTop: 2 }, children: "Search" }), results.length > 0 && (_jsxs("div", { style: { marginTop: 20 }, children: [_jsx(Typography, { variant: "h6", children: "Search Results:" }), _jsx("ul", { children: results.map((result, index) => (_jsx("li", { children: result }, index))) })] }))] }));
};
export default Search;
