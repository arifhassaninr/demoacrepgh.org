'use client';
import { useState } from 'react';
export default function MortgageCalculator() {
  const [amount, setAmount] = useState('200000');
  const [rate, setRate] = useState('6.5');
  const [years, setYears] = useState('30');
  const principal = Number(amount), monthlyRate = Number(rate) / 1200, months = Number(years) * 12;
  const valid = amount !== '' && rate !== '' && years !== '' && Number.isFinite(principal) && principal >= 0 && Number.isFinite(monthlyRate) && monthlyRate >= 0 && months > 0 && months <= 1200;
  const payment = valid ? (monthlyRate === 0 ? principal / months : principal * monthlyRate / (1 - (1 + monthlyRate) ** -months)) : null;
  return <div className="restored-calculator"><div className="calculator-fields">
    <label>Loan amount ($)<input type="number" min="0" value={amount} onChange={e => setAmount(e.target.value)} /></label>
    <label>Annual interest (%)<input type="number" min="0" step="0.1" value={rate} onChange={e => setRate(e.target.value)} /></label>
    <label>Term (years)<input type="number" min="1" max="100" value={years} onChange={e => setYears(e.target.value)} /></label>
  </div><div className="calculator-result" aria-live="polite"><span>Estimated monthly principal & interest</span><strong>{valid && Number.isFinite(payment) ? payment.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : 'Check your inputs'}</strong><p>Illustrative fixed-rate calculation. Excludes taxes, insurance, fees and other ownership costs. Rates shown are sample inputs.</p></div></div>;
}
