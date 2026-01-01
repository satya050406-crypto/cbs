import {
    Wallet,
    FileText,
    Rocket,
    ClipboardCheck,
    LineChart,
    ScrollText
} from 'lucide-react';

export const personalCategories = [
    {
        category_name: "Personal Finance",
        icon: Wallet,
        description: "Plan your financial future with expert guidance on savings, investments, and retirement.",
        services: [
            { name: "Monthly Budget Planning", price: "₹2,500" },
            { name: "Savings & Investment Guidance", price: "₹5,000" },
            { name: "Tax Saving Planning", price: "₹3,000" },
            { name: "Debt/Loan Management", price: "₹4,000" },
            { name: "Emergency Fund Planning", price: "₹1,500" },
            { name: "Retirement Planning", price: "₹7,500" },
            { name: "Financial Goal Setting", price: "₹3,500" }
        ]
    }
];

export const businessCategories = [
    {
        category_name: "GST & Taxation",
        icon: FileText,
        description: "Complete GST and taxation solutions for individuals and businesses.",
        services: [
            { name: "GST Registration", price: "₹1,500" },
            { name: "GST Return Filing (GSTR-1/3B)", price: "₹1,000/month" },
            { name: "GST Amendments", price: "₹1,000" },
            { name: "GST Audit", price: "₹15,000" },
            { name: "GST Notice Reply", price: "On Request" },
            { name: "E-Way Bill Support", price: "₹500/month" },
            { name: "Income Tax Return (ITR) Filing", price: "₹1,500" },
            { name: "Tax Planning", price: "₹5,000" },
            { name: "TDS/TCS Compliance", price: "₹1,500/month" },
            { name: "Tax Audit", price: "₹12,000" },
            { name: "Capital Gain Calculation", price: "₹2,500" }
        ]
    },
    {
        category_name: "Business Setup",
        icon: Rocket,
        description: "Start your entrepreneurial journey with our end-to-end registration services.",
        services: [
            { name: "Private Limited Company Registration", price: "₹7,999" },
            { name: "LLP Registration", price: "₹5,999" },
            { name: "Partnership Firm Registration", price: "₹2,999" },
            { name: "Sole Proprietorship Registration", price: "₹1,499" },
            { name: "MSME/Udyam Registration", price: "₹999" },
            { name: "Shop Act License", price: "₹1,999" },
            { name: "Trust/NGO Registration", price: "₹12,000" }
        ]
    },
    {
        category_name: "Audit & Documentation",
        icon: ClipboardCheck,
        description: "Comprehensive audit and documentation services to ensure compliance.",
        services: [
            { name: "Statutory Audit", price: "On Request" },
            { name: "Internal Audit", price: "On Request" },
            { name: "NGO Audit (12A/80G)", price: "₹10,000" },
            { name: "Business Loan Documentation", price: "₹5,000" },
            { name: "Personal/Home Loan Files", price: "₹2,500" },
            { name: "CMA Report Preparation", price: "₹3,500" },
            { name: "Projected Balance Sheet", price: "₹2,500" }
        ]
    },
    {
        category_name: "Accounting & Consulting",
        icon: LineChart,
        description: "Day-to-day accounting and strategic consulting for your business growth.",
        services: [
            { name: "Daily Bookkeeping", price: "₹2,000/month" },
            { name: "Profit & Loss Statement", price: "₹1,500" },
            { name: "Balance Sheet", price: "₹1,500" },
            { name: "Cash Flow Analysis", price: "₹2,500" },
            { name: "Bank Reconciliation", price: "₹1,000" },
            { name: "Startup Guidance", price: "₹5,000" },
            { name: "Financial Health Check", price: "₹3,000" }
        ]
    },
    {
        category_name: "Utilities & Registrations",
        icon: ScrollText,
        description: "Essential utility services and registrations to keep you compliant.",
        services: [
            { name: "PAN/TAN Application", price: "₹499" },
            { name: "Digital Signature Certificate (DSC)", price: "₹1,499" },
            { name: "Trademark Registration", price: "₹6,500" },
            { name: "Import Export Code (IEC)", price: "₹2,499" },
            { name: "PF/ESI Registration", price: "₹3,000" },
            { name: "ROC Annual Filing", price: "₹4,000" }
        ]
    }
];

export const allCategories = [...personalCategories, ...businessCategories];
