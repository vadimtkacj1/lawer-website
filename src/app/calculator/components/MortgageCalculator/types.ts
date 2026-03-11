export type LoanTerm = 10 | 15 | 20 | 25 | 30;

export interface CalculatorData {
  apartmentPrice: number;
  equity: number;
  mortgageAmount: number;
  selectedTerm: LoanTerm;
  monthlyPayment: number;
}

