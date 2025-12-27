export const serviceCategories = [
  {
    id: 'personal-finance',
    name: 'Personal Finance',
    color: '#d9fb06',
    icon: 'Wallet',
    type: 'individual',
    services: [
      {
        id: 'monthly-budget',
        title: 'Monthly Budget Planning',
        description: 'Comprehensive monthly budget planning to track income, expenses, and savings goals effectively.',
        estimatedTime: 'Ongoing',
        estimatedCost: '₹2,500/month',
        included: ['Income Analysis', 'Expense Tracking', 'Budget Reports', 'Monthly Review Calls'],
        documentRequired: 'Bank statements, Income proof'
      },
      {
        id: 'savings-investment',
        title: 'Savings & Investment Guidance',
        description: 'Expert advice on building wealth through smart savings and investment strategies.',
        estimatedTime: '1 Session',
        estimatedCost: '₹5,000',
        included: ['Risk Assessment', 'Portfolio Review', 'Investment Recommendations', 'Follow-up Support'],
        documentRequired: 'Current investment statements'
      },
      {
        id: 'tax-saving',
        title: 'Tax Saving Planning',
        description: 'Strategic tax planning to maximize savings under various sections of Income Tax Act.',
        estimatedTime: '2-3 Days',
        estimatedCost: '₹3,500',
        included: ['Tax Analysis', '80C to 80U Planning', 'Deduction Optimization', 'Investment Suggestions'],
        documentRequired: 'Previous ITR, Investment proofs'
      },
      {
        id: 'debt-management',
        title: 'Debt/Loan Management',
        description: 'Strategic debt management to reduce liabilities and improve financial health.',
        estimatedTime: '1-2 Sessions',
        estimatedCost: '₹4,000',
        included: ['Debt Assessment', 'Repayment Strategy', 'Interest Optimization', 'Credit Score Improvement'],
        documentRequired: 'Loan statements, Credit report'
      },
      {
        id: 'emergency-fund',
        title: 'Emergency Fund Planning',
        description: 'Build a robust emergency fund to handle unexpected financial situations.',
        estimatedTime: '1 Session',
        estimatedCost: '₹2,000',
        included: ['Expense Analysis', 'Fund Calculation', 'Savings Strategy', 'Account Setup Guidance'],
        documentRequired: 'Bank statements'
      },
      {
        id: 'retirement-planning',
        title: 'Retirement Planning',
        description: 'Comprehensive retirement planning to ensure financial security in golden years.',
        estimatedTime: 'Ongoing',
        estimatedCost: '₹8,000',
        included: ['Retirement Goal Setting', 'Corpus Calculation', 'Investment Strategy', 'Periodic Reviews'],
        documentRequired: 'Current assets, Expected expenses'
      },
      {
        id: 'financial-goals',
        title: 'Financial Goal Setting',
        description: 'Define and achieve short-term and long-term financial goals with expert guidance.',
        estimatedTime: '1 Session',
        estimatedCost: '₹3,000',
        included: ['Goal Assessment', 'Timeline Planning', 'Investment Mapping', 'Progress Tracking'],
        documentRequired: 'Income & expense details'
      }
    ]
  },
  {
    id: 'gst-taxation',
    name: 'GST & Taxation',
    color: '#3f4816',
    icon: 'FileText',
    type: 'business',
    services: [
      {
        id: 'gst-registration',
        title: 'GST Registration',
        description: 'Complete GST registration process with expert assistance for new businesses.',
        estimatedTime: '7-10 Days',
        estimatedCost: '₹1,500',
        included: ['Document Verification', 'Online Filing', 'GSTIN Certificate', 'Compliance Guidance'],
        documentRequired: 'PAN, Aadhaar, Business proof, Bank details'
      },
      {
        id: 'gst-filing',
        title: 'GST Return Filing (GSTR-1/3B)',
        description: 'Monthly/Quarterly GST return filing with accuracy and timely submission.',
        estimatedTime: '2-3 Days',
        estimatedCost: '₹800/month',
        included: ['Invoice Review', 'GSTR-1 Filing', 'GSTR-3B Filing', 'Payment Challan'],
        documentRequired: 'Sales & purchase invoices'
      },
      {
        id: 'gst-amendments',
        title: 'GST Amendments',
        description: 'Amendments in GST registration details and error corrections.',
        estimatedTime: '3-5 Days',
        estimatedCost: '₹1,000',
        included: ['Amendment Filing', 'Document Update', 'Verification Support', 'Updated Certificate'],
        documentRequired: 'Updated documents, GSTIN'
      },
      {
        id: 'gst-audit',
        title: 'GST Audit',
        description: 'Comprehensive GST audit to ensure compliance and identify discrepancies.',
        estimatedTime: '10-15 Days',
        estimatedCost: '₹15,000',
        included: ['Records Review', 'Compliance Check', 'Audit Report', 'Rectification Guidance'],
        documentRequired: 'All GST returns, Invoices, Books'
      },
      {
        id: 'gst-notice',
        title: 'GST Notice Reply',
        description: 'Expert reply to GST notices and department communications.',
        estimatedTime: '5-7 Days',
        estimatedCost: '₹3,000',
        included: ['Notice Analysis', 'Document Preparation', 'Reply Drafting', 'Follow-up Support'],
        documentRequired: 'Notice copy, Related documents'
      },
      {
        id: 'eway-bill',
        title: 'E-Way Bill Support',
        description: 'E-Way Bill generation and compliance support for goods transportation.',
        estimatedTime: 'Same Day',
        estimatedCost: '₹500',
        included: ['Bill Generation', 'Validity Extension', 'Compliance Check', 'Portal Support'],
        documentRequired: 'Invoice details, Transport info'
      },
      {
        id: 'itr-filing',
        title: 'Income Tax Return (ITR) Filing',
        description: 'Professional ITR filing for individuals and businesses with maximum refunds.',
        estimatedTime: '3-5 Days',
        estimatedCost: '₹1,500',
        included: ['Tax Calculation', 'Form Selection', 'Online Filing', 'Acknowledgment'],
        documentRequired: 'Form 16, Investment proofs, Bank statements'
      },
      {
        id: 'tax-planning',
        title: 'Tax Planning',
        description: 'Strategic tax planning to minimize tax liability legally and effectively.',
        estimatedTime: '2-3 Sessions',
        estimatedCost: '₹5,000',
        included: ['Income Analysis', 'Deduction Planning', 'Investment Strategy', 'Year-end Review'],
        documentRequired: 'Previous ITR, Income details'
      },
      {
        id: 'tds-tcs',
        title: 'TDS/TCS Compliance',
        description: 'Complete TDS/TCS compliance including deduction, payment, and filing.',
        estimatedTime: 'Ongoing',
        estimatedCost: '₹2,000/quarter',
        included: ['TDS Calculation', 'Payment Support', 'Return Filing', 'Certificate Generation'],
        documentRequired: 'Payment details, PAN of deductees'
      },
      {
        id: 'tax-audit',
        title: 'Tax Audit',
        description: 'Statutory tax audit under section 44AB for businesses exceeding threshold.',
        estimatedTime: '15-20 Days',
        estimatedCost: '₹25,000',
        included: ['Books Audit', 'Report Preparation', 'Form 3CD', 'Filing Support'],
        documentRequired: 'Complete books of accounts, ITR'
      },
      {
        id: 'capital-gain',
        title: 'Capital Gain Calculation',
        description: 'Accurate capital gain calculation for property, shares, and other assets.',
        estimatedTime: '2-3 Days',
        estimatedCost: '₹2,500',
        included: ['Gain Computation', 'Indexation Benefit', 'Tax Calculation', 'ITR Support'],
        documentRequired: 'Sale deed, Purchase deed, Investment proofs'
      }
    ]
  },
  {
    id: 'business-setup',
    name: 'Business Setup',
    color: '#f8d47a',
    icon: 'Building2',
    type: 'business',
    services: [
      {
        id: 'pvt-ltd-registration',
        title: 'Private Limited Company Registration',
        description: 'Complete private limited company registration with ROC compliance.',
        estimatedTime: '10-15 Days',
        estimatedCost: '₹12,000',
        included: ['Name Approval', 'DIN & DSC', 'MOA & AOA', 'Incorporation Certificate', 'PAN & TAN'],
        documentRequired: 'PAN, Aadhaar, Address proof of directors'
      },
      {
        id: 'llp-registration',
        title: 'LLP Registration',
        description: 'Limited Liability Partnership registration with complete documentation.',
        estimatedTime: '10-12 Days',
        estimatedCost: '₹10,000',
        included: ['Name Reservation', 'DPIN & DSC', 'LLP Agreement', 'Certificate of Incorporation'],
        documentRequired: 'PAN, Aadhaar, Address proof of partners'
      },
      {
        id: 'partnership-registration',
        title: 'Partnership Firm Registration',
        description: 'Traditional partnership firm registration with deed preparation.',
        estimatedTime: '5-7 Days',
        estimatedCost: '₹5,000',
        included: ['Partnership Deed', 'Stamp Duty Payment', 'Registration', 'PAN Application'],
        documentRequired: 'PAN, Aadhaar, Address proof of partners'
      },
      {
        id: 'proprietorship-registration',
        title: 'Sole Proprietorship Registration',
        description: 'Sole proprietorship setup with necessary registrations and licenses.',
        estimatedTime: '3-5 Days',
        estimatedCost: '₹3,000',
        included: ['Business Name Registration', 'PAN & TAN', 'Bank Account Opening', 'GST Registration'],
        documentRequired: 'PAN, Aadhaar, Address proof'
      },
      {
        id: 'msme-registration',
        title: 'MSME/Udyam Registration',
        description: 'Udyam registration for MSME benefits and government schemes.',
        estimatedTime: '2-3 Days',
        estimatedCost: '₹1,000',
        included: ['Online Application', 'Udyam Certificate', 'Benefits Guidance'],
        documentRequired: 'Aadhaar, Business PAN, GSTIN'
      },
      {
        id: 'shop-act',
        title: 'Shop Act License',
        description: 'Shop and Establishment Act registration for commercial establishments.',
        estimatedTime: '7-10 Days',
        estimatedCost: '₹2,000',
        included: ['Application Filing', 'Document Verification', 'License Certificate', 'Renewal Support'],
        documentRequired: 'Business proof, Address proof, Owner ID'
      },
      {
        id: 'trust-ngo',
        title: 'Trust/NGO Registration',
        description: 'Complete registration of trust or NGO with 12A and 80G exemptions.',
        estimatedTime: '20-30 Days',
        estimatedCost: '₹15,000',
        included: ['Trust Deed', 'Registration', '12A & 80G Application', 'PAN & TAN'],
        documentRequired: 'ID & Address proof of trustees, Trust deed draft'
      }
    ]
  },
  {
    id: 'audit-documentation',
    name: 'Audit & Documentation',
    color: '#888680',
    icon: 'ClipboardCheck',
    type: 'business',
    services: [
      {
        id: 'statutory-audit',
        title: 'Statutory Audit',
        description: 'Comprehensive statutory audit as per Companies Act and applicable standards.',
        estimatedTime: '15-20 Days',
        estimatedCost: '₹30,000',
        included: ['Books Verification', 'Financial Statement Audit', 'Audit Report', 'Board Report'],
        documentRequired: 'Complete books, Financial statements, Bank statements'
      },
      {
        id: 'internal-audit',
        title: 'Internal Audit',
        description: 'Internal audit to assess operational efficiency and internal controls.',
        estimatedTime: '10-15 Days',
        estimatedCost: '₹20,000',
        included: ['Process Review', 'Risk Assessment', 'Control Testing', 'Recommendations Report'],
        documentRequired: 'Books of accounts, Internal processes documentation'
      },
      {
        id: 'ngo-audit',
        title: 'NGO Audit (12A/80G)',
        description: 'Specialized audit for NGOs and trusts for tax exemption compliance.',
        estimatedTime: '10-12 Days',
        estimatedCost: '₹15,000',
        included: ['Accounts Audit', 'Utilization Report', 'Compliance Check', 'Audit Report'],
        documentRequired: 'Donation receipts, Expense vouchers, Bank statements'
      },
      {
        id: 'business-loan',
        title: 'Business Loan Documentation',
        description: 'Complete documentation and file preparation for business loans.',
        estimatedTime: '5-7 Days',
        estimatedCost: '₹8,000',
        included: ['CMA Report', 'Project Report', 'Financial Projections', 'Document Compilation'],
        documentRequired: 'Business financials, Bank statements, Property papers'
      },
      {
        id: 'personal-loan',
        title: 'Personal/Home Loan Files',
        description: 'Documentation support for personal and home loan applications.',
        estimatedTime: '3-5 Days',
        estimatedCost: '₹5,000',
        included: ['Income Documentation', 'Property Valuation', 'ITR & Bank Statements', 'Loan Application'],
        documentRequired: 'Salary slips, Bank statements, Property documents'
      },
      {
        id: 'cma-report',
        title: 'CMA Report Preparation',
        description: 'Detailed Credit Monitoring Arrangement report for loan applications.',
        estimatedTime: '5-7 Days',
        estimatedCost: '₹10,000',
        included: ['Financial Analysis', 'Working Capital Assessment', 'Projections', 'Bank Format Report'],
        documentRequired: '3 years financials, Current year provisional data'
      },
      {
        id: 'projected-balance-sheet',
        title: 'Projected Balance Sheet',
        description: 'Future financial projections for business planning and loan purposes.',
        estimatedTime: '3-5 Days',
        estimatedCost: '₹6,000',
        included: ['Revenue Projections', 'Expense Forecasting', 'Cash Flow Analysis', 'Balance Sheet'],
        documentRequired: 'Historical financials, Business plan'
      }
    ]
  },
  {
    id: 'accounting-consulting',
    name: 'Accounting & Consulting',
    color: '#0073e6',
    icon: 'Calculator',
    type: 'business',
    services: [
      {
        id: 'bookkeeping',
        title: 'Daily Bookkeeping',
        description: 'Systematic recording of daily business transactions and accounts maintenance.',
        estimatedTime: 'Ongoing',
        estimatedCost: '₹5,000/month',
        included: ['Transaction Recording', 'Ledger Maintenance', 'Voucher Entry', 'Monthly Reports'],
        documentRequired: 'Invoices, Bills, Bank statements'
      },
      {
        id: 'pl-statement',
        title: 'Profit & Loss Statement',
        description: 'Detailed P&L statement preparation for financial analysis.',
        estimatedTime: '3-5 Days',
        estimatedCost: '₹4,000',
        included: ['Revenue Analysis', 'Expense Categorization', 'P&L Report', 'Variance Analysis'],
        documentRequired: 'Books of accounts, Bank statements'
      },
      {
        id: 'balance-sheet',
        title: 'Balance Sheet Preparation',
        description: 'Comprehensive balance sheet showing assets, liabilities, and equity.',
        estimatedTime: '3-5 Days',
        estimatedCost: '₹4,000',
        included: ['Asset Valuation', 'Liability Compilation', 'Equity Calculation', 'Balance Sheet'],
        documentRequired: 'Complete books, Asset details'
      },
      {
        id: 'cash-flow',
        title: 'Cash Flow Analysis',
        description: 'Cash flow statement and analysis for better liquidity management.',
        estimatedTime: '2-3 Days',
        estimatedCost: '₹3,500',
        included: ['Operating Cash Flow', 'Investing Activities', 'Financing Activities', 'Analysis Report'],
        documentRequired: 'Bank statements, Books of accounts'
      },
      {
        id: 'reconciliation',
        title: 'Bank Reconciliation',
        description: 'Regular bank reconciliation to match books with bank statements.',
        estimatedTime: '1-2 Days',
        estimatedCost: '₹2,000',
        included: ['Book vs Bank Matching', 'Discrepancy Identification', 'Reconciliation Statement'],
        documentRequired: 'Books of accounts, Bank statements'
      },
      {
        id: 'startup-guidance',
        title: 'Startup Guidance',
        description: 'Complete guidance for startups on registration, compliance, and finance.',
        estimatedTime: '2-3 Sessions',
        estimatedCost: '₹10,000',
        included: ['Business Structure Advice', 'Registration Guidance', 'Compliance Roadmap', 'Financial Planning'],
        documentRequired: 'Business plan, Founder details'
      },
      {
        id: 'financial-health-check',
        title: 'Financial Health Check',
        description: 'Comprehensive financial health assessment with actionable recommendations.',
        estimatedTime: '5-7 Days',
        estimatedCost: '₹8,000',
        included: ['Ratio Analysis', 'Trend Analysis', 'Benchmarking', 'Improvement Plan'],
        documentRequired: 'Financial statements, Books of accounts'
      }
    ]
  },
  {
    id: 'utilities',
    name: 'Utilities & Registrations',
    color: '#302f2c',
    icon: 'Settings',
    type: 'business',
    services: [
      {
        id: 'pan-tan',
        title: 'PAN/TAN Application',
        description: 'Quick and hassle-free PAN and TAN application for individuals and businesses.',
        estimatedTime: '7-10 Days',
        estimatedCost: '₹500',
        included: ['Form Filling', 'Document Verification', 'Online Submission', 'Status Tracking'],
        documentRequired: 'ID proof, Address proof, Photo'
      },
      {
        id: 'dsc',
        title: 'Digital Signature Certificate (DSC)',
        description: 'Class 2 and Class 3 DSC for company registration and e-filing.',
        estimatedTime: '3-5 Days',
        estimatedCost: '₹1,500',
        included: ['Application Processing', 'DSC Token', '2 Years Validity', 'Installation Support'],
        documentRequired: 'PAN, Aadhaar, Photo, Email, Phone'
      },
      {
        id: 'trademark',
        title: 'Trademark Registration',
        description: 'Trademark registration to protect your brand identity legally.',
        estimatedTime: '6-8 Months',
        estimatedCost: '₹8,000',
        included: ['Trademark Search', 'Application Filing', 'Objection Reply', 'Registration Certificate'],
        documentRequired: 'Logo/Wordmark, Business details, Proprietor ID'
      },
      {
        id: 'iec',
        title: 'Import Export Code (IEC)',
        description: 'IEC registration for businesses involved in import/export activities.',
        estimatedTime: '7-10 Days',
        estimatedCost: '₹2,500',
        included: ['Online Application', 'Document Submission', 'IEC Certificate', 'Digital Signature'],
        documentRequired: 'PAN, Aadhaar, Bank certificate, Business proof'
      },
      {
        id: 'pf-esi',
        title: 'PF/ESI Registration',
        description: 'EPF and ESI registration for employee benefits and statutory compliance.',
        estimatedTime: '10-15 Days',
        estimatedCost: '₹3,000',
        included: ['PF Registration', 'ESI Registration', 'Establishment Code', 'Compliance Guide'],
        documentRequired: 'Company registration, Address proof, Employee details'
      },
      {
        id: 'roc-filing',
        title: 'ROC Annual Filing',
        description: 'Annual filing of forms with Registrar of Companies for compliance.',
        estimatedTime: '5-7 Days',
        estimatedCost: '₹5,000',
        included: ['Form Preparation', 'Financial Statement Filing', 'Annual Return', 'Acknowledgment'],
        documentRequired: 'Audited financials, Board resolution, Director details'
      }
    ]
  }
];

export const getAllServices = () => {
  const allServices = [];
  serviceCategories.forEach(category => {
    category.services.forEach(service => {
      allServices.push({
        ...service,
        category: category.name,
        categoryId: category.id,
        categoryColor: category.color,
        type: category.type
      });
    });
  });
  return allServices;
};

export const getServiceById = (id) => {
  const allServices = getAllServices();
  return allServices.find(service => service.id === id);
};

export const filterServicesByType = (type) => {
  if (type === 'all') return serviceCategories;
  return serviceCategories.filter(category => category.type === type);
};
