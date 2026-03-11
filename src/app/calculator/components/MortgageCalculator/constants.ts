import type { LoanTerm } from "./types";

export const LOAN_MULTIPLIERS: Record<LoanTerm, number> = {
  10: 1.254,
  15: 1.392,
  20: 1.55,
  25: 1.725,
  30: 1.897,
};

export const STEP = 100000;
export const MAX_MORTGAGE = 5000000;
export const MAX_PROPERTY = 10000000;
export const MAX_EQUITY = 5000000;

