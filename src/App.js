import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from "react-helmet";
import Calculator from "./components/Calculator";
import Search from "./components/Search";
const App = () => {
    return (_jsxs("div", { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Income Tax Calculator 2025 - New Tax Regime India" }), _jsx("meta", { name: "description", content: "Calculate your income tax in India under the new tax regime for 2025. Get accurate results for income tax slabs and deductions." }), _jsx("meta", { name: "keywords", content: "income tax, income tax 2025, new tax regime, india, india income tax 2025" }), _jsx("meta", { property: "og:title", content: "Income Tax Calculator 2025 - New Tax Regime India" }), _jsx("meta", { property: "og:description", content: "Calculate your income tax in India under the new tax regime for 2025." })] }), _jsx(Search, {}), _jsx(Calculator, {})] }));
};
export default App;
