// src/utils/taxUtils.ts
export const calculateIncomeTax = (income) => {
    let taxAmount = 0;
    // New Tax Slabs for 2025
    if (income <= 400000) {
        taxAmount = 0; // Nil tax for income up to 4 lakh
    }
    else if (income <= 800000) {
        taxAmount = (income - 400000) * 0.05; // 5% tax for income between 4-8 lakh
    }
    else if (income <= 1200000) {
        taxAmount = 400000 * 0.05 + (income - 800000) * 0.1; // 10% tax for income between 8-12 lakh
    }
    else if (income <= 1600000) {
        taxAmount = 400000 * 0.05 + 400000 * 0.1 + (income - 1200000) * 0.15; // 15% tax for income between 12-16 lakh
    }
    else if (income <= 2000000) {
        taxAmount =
            400000 * 0.05 + 400000 * 0.1 + 400000 * 0.15 + (income - 1600000) * 0.2; // 20% tax for income between 16-20 lakh
    }
    else if (income <= 2400000) {
        taxAmount =
            400000 * 0.05 +
                400000 * 0.1 +
                400000 * 0.15 +
                400000 * 0.2 +
                (income - 2000000) * 0.25; // 25% tax for income between 20-24 lakh
    }
    else {
        taxAmount =
            400000 * 0.05 +
                400000 * 0.1 +
                400000 * 0.15 +
                400000 * 0.2 +
                400000 * 0.25 +
                (income - 2400000) * 0.3; // 30% tax for income above 24 lakh
    }
    return taxAmount;
};
