import type { CryptoPrice, Trader, InvestmentPlan, LiveTransaction, FAQItem } from '../types';

export const mockCryptoPrices: CryptoPrice[] = [
  { symbol: 'BTC', name: 'Bitcoin', price: 92450.80, change24h: 3.45, icon: '₿' },
  { symbol: 'ETH', name: 'Ethereum', price: 3420.15, change24h: 4.12, icon: 'Ξ' },
  { symbol: 'SOL', name: 'Solana', price: 194.50, change24h: 8.76, icon: '◎' },
  { symbol: 'BNB', name: 'Binance Coin', price: 612.30, change24h: 1.85, icon: '🪙' },
  { symbol: 'XRP', name: 'Ripple', price: 1.48, change24h: 12.30, icon: '✕' },
  { symbol: 'ADA', name: 'Cardano', price: 0.85, change24h: -0.45, icon: '₳' },
  { symbol: 'AVAX', name: 'Avalanche', price: 38.60, change24h: 6.20, icon: '🔺' },
];

export const mockTraders: Trader[] = [
  {
    id: 'trader-1',
    name: 'Alexander V. Vance',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    specialty: 'BTC Scalping & Momentum',
    winRate: 94.8,
    roi30d: 142.5,
    copiers: 3420,
    totalProfit: 894500,
    riskLevel: 'Medium',
    verified: true,
  },
  {
    id: 'trader-2',
    name: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    specialty: 'DeFi & Altcoin Arbitrage',
    winRate: 96.2,
    roi30d: 188.4,
    copiers: 4890,
    totalProfit: 1240000,
    riskLevel: 'Low',
    verified: true,
  },
  {
    id: 'trader-3',
    name: 'Marcus Thorne',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    specialty: 'Futures & Leveraged Swing',
    winRate: 91.5,
    roi30d: 210.8,
    copiers: 2810,
    totalProfit: 950200,
    riskLevel: 'High',
    verified: true,
  },
  {
    id: 'trader-4',
    name: 'Sophia Chen',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    specialty: 'ETH Ecosystem & Options',
    winRate: 93.9,
    roi30d: 125.0,
    copiers: 1950,
    totalProfit: 610000,
    riskLevel: 'Low',
    verified: true,
  },
];

export const mockPlans: InvestmentPlan[] = [
  {
    id: 'plan-starter',
    name: 'STARTER MIRROR',
    dailyPercent: 2.5,
    durationDays: 7,
    minAmount: 300,
    maxAmount: 2999,
    capitalReturn: true,
    instantWithdrawal: true,
  },
  {
    id: 'plan-silver',
    name: 'PRO COPIER',
    dailyPercent: 4.0,
    durationDays: 14,
    minAmount: 3000,
    maxAmount: 9999,
    capitalReturn: true,
    instantWithdrawal: true,
    popular: true,
  },
  {
    id: 'plan-gold',
    name: 'INSTITUTIONAL VIP',
    dailyPercent: 6.5,
    durationDays: 30,
    minAmount: 10000,
    maxAmount: 50000,
    capitalReturn: true,
    instantWithdrawal: true,
  },
  {
    id: 'plan-unlimited',
    name: 'ALPHA HEDGE FUND',
    dailyPercent: 10.0,
    durationDays: 60,
    minAmount: 50000,
    maxAmount: 500000,
    capitalReturn: true,
    instantWithdrawal: true,
  },
];

export const mockLiveTransactions: LiveTransaction[] = [
  { id: 'tx-1', type: 'Deposit', username: 'CryptoKing99', amount: 5400, currency: 'USDT', timeAgo: '2 mins ago', txHash: '0x8f2a...91b4' },
  { id: 'tx-2', type: 'Withdrawal', username: 'Sarah_Trader', amount: 12850, currency: 'BTC', timeAgo: '4 mins ago', txHash: '0x3c9e...41a2' },
  { id: 'tx-3', type: 'Deposit', username: 'GlobalInvestor', amount: 25000, currency: 'ETH', timeAgo: '7 mins ago', txHash: '0x1b7d...88c9' },
  { id: 'tx-4', type: 'Withdrawal', username: 'David_M', amount: 3200, currency: 'USDT', timeAgo: '11 mins ago', txHash: '0x99a1...55e0' },
  { id: 'tx-5', type: 'Deposit', username: 'NakamotoX', amount: 10000, currency: 'SOL', timeAgo: '15 mins ago', txHash: '0x4e2f...77d3' },
  { id: 'tx-6', type: 'Withdrawal', username: 'Elena_K', amount: 7500, currency: 'USDT', timeAgo: '19 mins ago', txHash: '0x62c4...10b9' },
];

export const mockFAQS: FAQItem[] = [
  {
    question: 'How does Mirror Live Trades automated copy trading work?',
    answer: 'Mirror Live Trades connects your investor wallet directly to our elite algorithmic trading nodes and verified pro master traders. Once you choose a trader or investment tier, our system mirrors all trades in real-time instantly with zero delay.',
    category: 'General',
  },
  {
    question: 'What is the minimum initial deposit required?',
    answer: 'You can start automated copy trading on our Starter Mirror plan with a minimum deposit of just $300 in BTC, ETH, USDT, or SOL.',
    category: 'Investing',
  },
  {
    question: 'How quickly are withdrawals processed?',
    answer: 'Withdrawals are processed automatically through smart contract execution. Once requested, your funds are delivered directly to your crypto address within 5 to 15 minutes.',
    category: 'Withdrawals',
  },
  {
    question: 'Is my invested capital safe and insured?',
    answer: 'Yes. All client funds are housed in multi-signature cold storage vaults safeguarded with $250M institutional insurance policies backed by leading security custodians.',
    category: 'Security',
  },
  {
    question: 'Can I copy multiple traders simultaneously?',
    answer: 'Absolutely! You can diversify your portfolio by allocating your capital across different master traders specializing in BTC momentum, DeFi arbitrage, and altcoin futures.',
    category: 'Trading',
  },
];
