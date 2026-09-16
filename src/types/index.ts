export interface CryptoPrice {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  icon: string;
}

export interface Trader {
  id: string;
  name: string;
  avatar: string;
  specialty: string;
  winRate: number;
  roi30d: number;
  copiers: number;
  totalProfit: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  verified: boolean;
}

export interface InvestmentPlan {
  id: string;
  name: string;
  dailyPercent: number;
  durationDays: number;
  minAmount: number;
  maxAmount: number;
  capitalReturn: boolean;
  instantWithdrawal: boolean;
  popular?: boolean;
}

export interface LiveTransaction {
  id: string;
  type: 'Deposit' | 'Withdrawal';
  username: string;
  amount: number;
  currency: string;
  timeAgo: string;
  txHash: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
