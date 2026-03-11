import type { LoanTerm } from "./types";
import { LOAN_MULTIPLIERS } from "./constants";

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat("he-IL", {
    maximumFractionDigits: 0,
  }).format(num);
};

export const calculateMonthlyPayment = (amount: number, term: LoanTerm): number => {
  if (amount === 0) return 0;
  const multiplier = LOAN_MULTIPLIERS[term];
  return (amount * multiplier) / term / 12;
};

export const calculateMortgageAmount = (apartmentPrice: number, equity: number): number => {
  return apartmentPrice - equity > 0 ? apartmentPrice - equity : 0;
};

