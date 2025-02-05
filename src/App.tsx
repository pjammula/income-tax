// src/App.tsx

import React from "react";
import { Helmet } from "react-helmet";
import Calculator from "./components/Calculator";

const App: React.FC = () => {
  return (
    <div>
      {/* SEO - Dynamically set title and meta tags */}
      <Helmet>
        <title>Income Tax Calculator 2025 - New Tax Regime India</title>
        <meta
          name="description"
          content="Calculate your income tax in India under the new tax regime for 2025. Get accurate results for income tax slabs and deductions."
        />
        <meta
          name="keywords"
          content="income tax, income tax 2025, new tax regime, india, india income tax 2025"
        />
        <meta
          property="og:title"
          content="Income Tax Calculator 2025 - New Tax Regime India"
        />
        <meta
          property="og:description"
          content="Calculate your income tax in India under the new tax regime for 2025."
        />
      </Helmet>

      <Calculator />
    </div>
  );
};

export default App;
