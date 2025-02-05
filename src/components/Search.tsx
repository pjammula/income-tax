// src/components/Search.tsx

import React, { useState } from "react";
import Fuse from "fuse.js";
import { TextField, Button, Typography } from "@mui/material";

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);

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

  return (
    <div>
      <TextField
        label="Search Keywords"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleSearch} sx={{ marginTop: 2 }}>
        Search
      </Button>

      {results.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <Typography variant="h6">Search Results:</Typography>
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
