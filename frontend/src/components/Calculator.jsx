import React, { useState } from 'react';

const Calculator = () => {
    const [loanAmount, setLoanAmount] = useState(1000000);
    const [interestRate, setInterestRate] = useState(10);
    const [tenure, setTenure] = useState(12);

    const calculateEMI = () => {
        const principal = Number(loanAmount);
        const rate = Number(interestRate) / 12 / 100;
        const time = Number(tenure);

        if (principal > 0 && rate > 0 && time > 0) {
            const emi = principal * rate * (Math.pow(1 + rate, time) / (Math.pow(1 + rate, time) - 1));
            return Math.round(emi);
        }
        return 0;
    };

    const emi = calculateEMI();
    const totalAmount = emi * tenure;
    const totalInterest = totalAmount - loanAmount;

    return (
        <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-corporate-primary text-sm font-bold uppercase tracking-widest mb-2 block">Financial Tools</span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">EMI Calculator</h2>
                        <p className="text-gray-600 dark:text-gray-400">Plan your finances with our easy-to-use EMI calculator.</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                        <div className="p-8 md:p-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Loan Amount (₹)
                                        </label>
                                        <input
                                            type="number"
                                            value={loanAmount}
                                            onChange={(e) => setLoanAmount(e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-corporate-primary focus:border-transparent outline-none transition-all"
                                            placeholder="Enter amount"
                                        />
                                        <input
                                            type="range"
                                            min="100000"
                                            max="10000000"
                                            step="10000"
                                            value={loanAmount}
                                            onChange={(e) => setLoanAmount(e.target.value)}
                                            className="w-full mt-3 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-corporate-primary"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Interest Rate (% p.a)
                                        </label>
                                        <input
                                            type="number"
                                            value={interestRate}
                                            onChange={(e) => setInterestRate(e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-corporate-primary focus:border-transparent outline-none transition-all"
                                            placeholder="Enter rate"
                                        />
                                        <input
                                            type="range"
                                            min="1"
                                            max="20"
                                            step="0.1"
                                            value={interestRate}
                                            onChange={(e) => setInterestRate(e.target.value)}
                                            className="w-full mt-3 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-corporate-primary"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Tenure (Months)
                                        </label>
                                        <input
                                            type="number"
                                            value={tenure}
                                            onChange={(e) => setTenure(e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-corporate-primary focus:border-transparent outline-none transition-all"
                                            placeholder="Enter months"
                                        />
                                        <input
                                            type="range"
                                            min="6"
                                            max="360"
                                            step="6"
                                            value={tenure}
                                            onChange={(e) => setTenure(e.target.value)}
                                            className="w-full mt-3 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-corporate-primary"
                                        />
                                    </div>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 flex flex-col justify-center space-y-6">
                                    <div className="text-center">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Monthly EMI</p>
                                        <div className="text-4xl font-bold text-corporate-primary">
                                            ₹{emi.toLocaleString('en-IN')}
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-600 dark:text-gray-400">Principal Amount</span>
                                            <span className="font-semibold text-gray-900 dark:text-white">₹{Number(loanAmount).toLocaleString('en-IN')}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-600 dark:text-gray-400">Total Interest</span>
                                            <span className="font-semibold text-gray-900 dark:text-white">₹{Math.round(totalInterest).toLocaleString('en-IN')}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm pt-3 border-t border-gray-200 dark:border-gray-700">
                                            <span className="font-bold text-gray-900 dark:text-white">Total Amount</span>
                                            <span className="font-bold text-corporate-primary">₹{Math.round(totalAmount).toLocaleString('en-IN')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
