import type { Job } from '@/components/common/JobCard'

export type PremiumJob = Job & {
  slug: string
}

export const premiumJobCards: PremiumJob[] = [
  // February 27, 2026
  { slug: 'head-of-operations-modern-trade-supermarket-chain', industry: 'Other', title: 'Head of Operations – Modern Trade (Supermarket Chain)', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'senior-sales-manager', industry: 'Other', title: 'Senior Sales Manager', currency: 'LKR', salaryMin: '1000000', salaryMax: '1200000', location: 'Saudi Arabia', type: 'Other', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'executive-research-business-development', industry: 'Other', title: 'EXECUTIVE – RESEARCH & BUSINESS DEVELOPMENT', currency: 'LKR', salaryMin: '55000', salaryMax: '65000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'accountant-power-energy', industry: 'Power & Energy', title: 'Accountant', currency: 'LKR', salaryMin: '200000', salaryMax: '250000', location: 'Sri Lanka', type: 'Power & Energy', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'general-manager-sales-4-wheeler-cars-suv', industry: 'Automative', title: 'General Manager – Sales (4 Wheeler Cars & SUV)', currency: 'LKR', salaryMin: '1200000', salaryMax: '', location: 'Sri Lanka', type: 'Automative', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'general-manager-sales-automative', industry: 'Automative', title: 'General Manager – Sales', currency: 'LKR', salaryMin: '1200000', salaryMax: '', location: 'Sri Lanka', type: 'Automative', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'chief-operating-officer-apparel', industry: 'Apparel', title: 'Chief Operating Officer', currency: 'USD', salaryMin: '10000', salaryMax: '', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'procurement-manager', industry: 'Other', title: 'Procurement Manager', currency: 'LKR', salaryMin: '400000', salaryMax: '550000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'manager-senior-manager-digital-marketing', industry: 'Information Technology', title: 'Manager / Senior Manager Digital Marketing', currency: 'LKR', salaryMin: '450000', salaryMax: '550000', location: 'Sri Lanka', type: 'Information Technology', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'manager-quality-assurance', industry: 'Apparel', title: 'Manager – Quality Assurance', currency: 'LKR', salaryMin: '320000', salaryMax: '420000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'cutting-manager', industry: 'Apparel', title: 'Cutting Manager', currency: 'LKR', salaryMin: '320000', salaryMax: '420000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'February 27, 2026' },
  { slug: 'cluster-manager-human-resources', industry: 'Apparel', title: 'Cluster Manager – Human Resources', currency: 'LKR', salaryMin: '650000', salaryMax: '800000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'February 27, 2026' },

  // February 26, 2026
  { slug: 'senior-accountant-power-energy', industry: 'Power & Energy', title: 'Senior Accountant', currency: 'LKR', salaryMin: '350000', salaryMax: '400000', location: 'Sri Lanka', type: 'Power & Energy', workType: 'On-Site', date: 'February 26, 2026' },
  { slug: 'assistant-manager-hr-analytics', industry: 'Apparel', title: 'Assistant Manager – HR Analytics', currency: 'LKR', salaryMin: '250000', salaryMax: '', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'February 26, 2026' },
  { slug: 'senior-maintenance-manager', industry: 'Apparel', title: 'Senior Maintenance Manager', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'India', type: 'Apparel', workType: 'On-Site', date: 'February 26, 2026' },
  { slug: 'marketing-manager-other', industry: 'Other', title: 'Marketing Manager', currency: 'LKR', salaryMin: '250000', salaryMax: '400000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 26, 2026' },
  { slug: 'financial-analyst-automative', industry: 'Automative', title: 'Financial Analyst', currency: 'LKR', salaryMin: '350000', salaryMax: '', location: 'Sri Lanka', type: 'Automative', workType: 'On-Site', date: 'February 26, 2026' },
  { slug: 'manager-human-resources-head-office', industry: 'Apparel', title: 'Manager – Human Resources (Head Office)', currency: 'LKR', salaryMin: '380000', salaryMax: '425000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'February 26, 2026' },
  { slug: 'assistant-manager-finance-feb26', industry: 'Other', title: 'Assistant Manager – Finance', currency: 'LKR', salaryMin: '350000', salaryMax: '400000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 26, 2026' },
  { slug: 'senior-manager-engineering-mechanical', industry: 'Apparel', title: 'Senior Manager – Engineering (Mechanical)', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'India', type: 'Apparel', workType: 'On-Site', date: 'February 26, 2026' },
  { slug: 'head-of-sales-country-sales-manager', industry: 'Other', title: 'Head of Sales / Country Sales Manager', currency: 'LKR', salaryMin: '700000', salaryMax: '1000000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 26, 2026' },
  { slug: 'finance-analyst-project-accountant', industry: 'Information Technology', title: 'Finance Analyst & Project Accountant', currency: 'LKR', salaryMin: '', salaryMax: '250000', location: 'Sri Lanka', type: 'Information Technology', workType: 'On-Site', date: 'February 26, 2026' },
  { slug: 'human-resources-analyst', industry: 'Apparel', title: 'Human Resources Analyst', currency: 'LKR', salaryMin: '150000', salaryMax: '200000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'February 26, 2026' },
  { slug: 'engineering-manager', industry: 'Other', title: 'Engineering Manager', currency: 'LKR', salaryMin: '500000', salaryMax: '600000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 26, 2026' },

  // February 13, 2026
  { slug: 'production-manager-apparel', industry: 'Apparel', title: 'Production Manager', currency: 'LKR', salaryMin: '450000', salaryMax: '', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'February 13, 2026' },
  { slug: 'research-business-development-it', industry: 'Information Technology', title: 'RESEARCH & BUSINESS DEVELOPMENT', currency: 'LKR', salaryMin: '55000', salaryMax: '65000', location: 'Sri Lanka', type: 'Information Technology', workType: 'On-Site', date: 'February 13, 2026' },
  { slug: 'vice-president-sales-it', industry: 'Information Technology', title: 'Vice President Sales', currency: 'LKR', salaryMin: '700000', salaryMax: '1000000', location: 'Sri Lanka', type: 'Information Technology', workType: 'On-Site', date: 'February 13, 2026' },
  { slug: 'finance-manager-hospitality', industry: 'Hospitality', title: 'Finance Manager', currency: 'LKR', salaryMin: '450000', salaryMax: '', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'February 13, 2026' },
  { slug: 'engineering-delivery-manager-it', industry: 'Information Technology', title: 'Engineering Delivery Manager', currency: 'LKR', salaryMin: '800000', salaryMax: '1100000', location: 'Sri Lanka', type: 'Information Technology', workType: 'On-Site', date: 'February 13, 2026' },
  { slug: 'financial-analyst-other', industry: 'Other', title: 'Financial Analyst', currency: 'LKR', salaryMin: '125000', salaryMax: '135000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 13, 2026' },
  { slug: 'assistant-manager-finance-feb13', industry: 'Other', title: 'Assistant Manager – Finance', currency: 'LKR', salaryMin: '', salaryMax: '300000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 13, 2026' },
  { slug: 'vice-president-senior-vice-president-sales', industry: 'Information Technology', title: 'Vice President / Senior Vice President Sales', currency: 'LKR', salaryMin: '1000000', salaryMax: '1100000', location: 'Sri Lanka', type: 'Information Technology', workType: 'On-Site', date: 'February 13, 2026' },
  { slug: 'assistant-brand-manager-fmcg-feb13', industry: 'FMCG', title: 'Assistant Brand Manager', currency: 'LKR', salaryMin: '200000', salaryMax: '250000', location: 'Sri Lanka', type: 'FMCG', workType: 'On-Site', date: 'February 13, 2026' },
  { slug: 'assistant-accountant', industry: 'Other', title: 'Assistant Accountant', currency: 'LKR', salaryMin: '80000', salaryMax: '90000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 13, 2026' },
  { slug: 'divisional-planning-manager', industry: 'Apparel', title: 'Divisional Planning Manager', currency: 'USD', salaryMin: '5000', salaryMax: '6000', location: 'Cambodia', type: 'Apparel', workType: 'On-Site', date: 'February 13, 2026' },
  { slug: 'brand-manager-fmcg', industry: 'FMCG', title: 'Brand Manager', currency: 'LKR', salaryMin: '300000', salaryMax: '350000', location: 'Sri Lanka', type: 'FMCG', workType: 'On-Site', date: 'February 13, 2026' },
  { slug: 'manager-senior-manager-international-sales-cinnamon', industry: 'Other', title: 'Manager / Senior Manager – International Sales (Cinnamon)', currency: 'LKR', salaryMin: '250000', salaryMax: '350000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 13, 2026' },
  { slug: 'management-accountant-financial-analyst-project-accountant', industry: 'Information Technology', title: 'Management Accountant / Financial Analyst cum Project Accountant', currency: 'LKR', salaryMin: '200000', salaryMax: '250000', location: 'Sri Lanka', type: 'Information Technology', workType: 'On-Site', date: 'February 13, 2026' },
  { slug: 'hse-esg-manager-feb13', industry: 'Other', title: 'HSE & ESG Manager', currency: 'LKR', salaryMin: '400000', salaryMax: '500000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 13, 2026' },
  { slug: 'head-of-legal', industry: 'Other', title: 'Head of Legal', currency: 'LKR', salaryMin: '600000', salaryMax: '700000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 13, 2026' },

  // February 12, 2026
  { slug: 'business-analyst-it', industry: 'Information Technology', title: 'Business Analyst', currency: 'LKR', salaryMin: '220002', salaryMax: '300000', location: 'Sri Lanka', type: 'Information Technology', workType: 'On-Site', date: 'February 12, 2026' },
  { slug: 'senior-business-analyst-it', industry: 'Information Technology', title: 'Senior Business Analyst', currency: 'LKR', salaryMin: '220000', salaryMax: '300000', location: 'Sri Lanka', type: 'Information Technology', workType: 'On-Site', date: 'February 12, 2026' },

  // February 7, 2026
  { slug: 'accountant-power-energy-feb7', industry: 'Power & Energy', title: 'Accountant', currency: 'LKR', salaryMin: '', salaryMax: '250000', location: 'Sri Lanka', type: 'Power & Energy', workType: 'On-Site', date: 'February 7, 2026' },
  { slug: 'assistant-manager-taxation', industry: 'Other', title: 'Assistant Manager – Taxation', currency: 'LKR', salaryMin: '200000', salaryMax: '250000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 7, 2026' },
  { slug: 'senior-manager-digital-marketing-feb7', industry: 'Information Technology', title: 'Senior Manager Digital Marketing', currency: 'LKR', salaryMin: '450000', salaryMax: '550000', location: 'Sri Lanka', type: 'Information Technology', workType: 'On-Site', date: 'February 7, 2026' },

  // February 6, 2026
  { slug: 'corporate-sales-manager-hospitality', industry: 'Hospitality', title: 'Corporate Sales Manager', currency: 'LKR', salaryMin: '200000', salaryMax: '400000', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'February 6, 2026' },
  { slug: 'finance-executive', industry: 'Other', title: 'Finance Executive', currency: 'LKR', salaryMin: '120000', salaryMax: '150000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 6, 2026' },
  { slug: 'ifs-erp-manager-team-lead', industry: 'Other', title: 'IFS ERP Manager – Team Lead (Managerial Level)', currency: 'LKR', salaryMin: '500000', salaryMax: '550000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 6, 2026' },
  { slug: 'regional-sales-manager-power-energy', industry: 'Power & Energy', title: 'Regional Sales Manager', currency: 'USD', salaryMin: '12500', salaryMax: '1000000', location: 'Saudi Arabia', type: 'Power & Energy', workType: 'On-Site', date: 'February 6, 2026' },
  { slug: 'sales-manager-power-energy', industry: 'Power & Energy', title: 'Sales Manager', currency: 'LKR', salaryMin: '350000', salaryMax: '400000', location: 'Sri Lanka', type: 'Power & Energy', workType: 'On-Site', date: 'February 6, 2026' },
  { slug: 'business-development-assistant-manager-international', industry: 'Other', title: 'Business Development – Assistant Manager (International Markets)', currency: 'LKR', salaryMin: '285000', salaryMax: '360000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 6, 2026' },
  { slug: 'senior-executive-operations-business-analysis', industry: 'Other', title: 'Senior Executive Operations & Business Analysis', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 6, 2026' },
  { slug: 'student-enrollment-counsellors', industry: 'Education', title: 'Student Enrollment Counsellors', currency: 'LKR', salaryMin: '75000', salaryMax: '', location: 'Sri Lanka', type: 'Education', workType: 'On-Site', date: 'February 6, 2026' },
  { slug: 'delivery-manager', industry: 'Other', title: 'Delivery Manager', currency: 'LKR', salaryMin: '800000', salaryMax: '1100000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 6, 2026' },
  { slug: 'assistant-procurement-manager-fmcg', industry: 'FMCG', title: 'Assistant Procurement Manager', currency: 'LKR', salaryMin: '175000', salaryMax: '250000', location: 'Sri Lanka', type: 'FMCG', workType: 'On-Site', date: 'February 6, 2026' },
  { slug: 'assistant-team-lead-operations', industry: 'Other', title: 'Assistant Team Lead – Operations', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'February 6, 2026' },

  // February 1, 2026
  { slug: 'business-analyst-hospitality-feb1', industry: 'Hospitality', title: 'Business Analyst', currency: 'LKR', salaryMin: '150000', salaryMax: '165000', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'February 1, 2026' },
  { slug: 'area-sales-manager-fmcg-saudi', industry: 'FMCG', title: 'Area Sales Manager', currency: 'LKR', salaryMin: '1050000', salaryMax: '1300000', location: 'Saudi Arabia', type: 'FMCG', workType: 'On-Site', date: 'February 1, 2026' },
  { slug: 'manager-front-office', industry: 'Hospitality', title: 'Manager Front Office', currency: 'LKR', salaryMin: '150000', salaryMax: '250000', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'February 1, 2026' },
  { slug: 'event-manager', industry: 'Hospitality', title: 'Event Manager', currency: 'LKR', salaryMin: '', salaryMax: '400000', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'February 1, 2026' },
  { slug: 'technical-executive-apparel', industry: 'Apparel', title: 'Technical Executive', currency: 'LKR', salaryMin: '80000', salaryMax: '120000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'February 1, 2026' },
  { slug: 'cutting-executive-apparel', industry: 'Apparel', title: 'Cutting Executive', currency: 'LKR', salaryMin: '80000', salaryMax: '120000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'February 1, 2026' },
  { slug: 'quality-assurance-executive-senior-executive', industry: 'Apparel', title: 'Quality Assurance – Executive / Senior Executive', currency: 'LKR', salaryMin: '80000', salaryMax: '160000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'February 1, 2026' },
  { slug: 'chief-financial-officer-uk', industry: 'Other', title: 'Chief Financial Officer', currency: 'USD', salaryMin: '12000', salaryMax: '15000', location: 'UK', type: 'Other', workType: 'On-Site', date: 'February 1, 2026' },

  // January 23, 2026
  { slug: 'general-manager-hospitality-bangladesh', industry: 'Hospitality', title: 'General Manager', currency: 'LKR', salaryMin: '', salaryMax: '3500', location: 'Bangladesh', type: 'Hospitality', workType: 'On-Site', date: 'January 23, 2026' },
  { slug: 'manager-branding-marketing-education', industry: 'Education', title: 'Manager – Branding & Marketing', currency: 'LKR', salaryMin: '', salaryMax: '299998', location: 'Sri Lanka', type: 'Education', workType: 'On-Site', date: 'January 23, 2026' },
  { slug: 'assistant-manager-fpa', industry: 'Other', title: 'Assistant Manager FP&A', currency: 'LKR', salaryMin: '', salaryMax: '450000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'January 23, 2026' },

  // January 21, 2026
  { slug: 'assistant-manager-finance-jan21', industry: 'Other', title: 'Assistant Manager – Finance', currency: 'LKR', salaryMin: '', salaryMax: '300000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'January 21, 2026' },
  { slug: 'head-of-housekeeping', industry: 'Hospitality', title: 'Head of Housekeeping', currency: 'LKR', salaryMin: '250000', salaryMax: '350000', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'January 21, 2026' },
  { slug: 'production-executive-apparel', industry: 'Apparel', title: 'Production Executive', currency: 'LKR', salaryMin: '', salaryMax: '100000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'January 21, 2026' },
  { slug: 'chief-executive-officer-shipping', industry: 'Shipping & Freight', title: 'Chief Executive Officer', currency: 'LKR', salaryMin: '800000', salaryMax: '999998', location: 'Sri Lanka', type: 'Shipping & Freight', workType: 'On-Site', date: 'January 21, 2026' },

  // January 16, 2026
  { slug: 'general-manager-engineering-it', industry: 'Information Technology', title: 'General Manager Engineering', currency: 'LKR', salaryMin: '', salaryMax: '1500000', location: 'Sri Lanka', type: 'Information Technology', workType: 'On-Site', date: 'January 16, 2026' },
  { slug: 'engineering-delivery-manager-jan16', industry: 'Information Technology', title: 'Engineering Delivery Manager', currency: 'LKR', salaryMin: '1000000', salaryMax: '1300000', location: 'Sri Lanka', type: 'Information Technology', workType: 'On-Site', date: 'January 16, 2026' },
  { slug: 'assistant-manager-finance-hospitality-jan16', industry: 'Hospitality', title: 'Assistant Manager Finance', currency: 'LKR', salaryMin: '', salaryMax: '200000', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'January 16, 2026' },
  { slug: 'assistant-manager-finance-other-jan16', industry: 'Other', title: 'Assistant Manager Finance', currency: 'LKR', salaryMin: '', salaryMax: '250000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'January 16, 2026' },
  { slug: 'hse-esg-manager-power-jan16', industry: 'Power & Energy', title: 'HSE & ESG Manager', currency: 'LKR', salaryMin: '', salaryMax: '400000', location: 'Sri Lanka', type: 'Power & Energy', workType: 'On-Site', date: 'January 16, 2026' },
  { slug: 'senior-pattern-maker-denim', industry: 'Apparel', title: 'Senior Pattern Maker – Denim', currency: 'USD', salaryMin: '1500', salaryMax: '1750', location: 'Egypt', type: 'Apparel', workType: 'On-Site', date: 'January 16, 2026' },
  { slug: 'company-secretary-jan16', industry: 'Other', title: 'Company Secretary', currency: 'LKR', salaryMin: '300000', salaryMax: '350000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'January 16, 2026' },
  { slug: 'warehouse-manager', industry: 'Other', title: 'Warehouse Manager', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'January 16, 2026' },
  { slug: 'educational-technology-officer', industry: 'Education', title: 'Educational Technology Officer', currency: 'LKR', salaryMin: '', salaryMax: '75000', location: 'Sri Lanka', type: 'Education', workType: 'On-Site', date: 'January 16, 2026' },
  { slug: 'assistant-manager-financial-planning-analysis', industry: 'Other', title: 'Assistant Manager Financial Planning and Analysis', currency: 'LKR', salaryMin: '', salaryMax: '400000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'January 16, 2026' },
  { slug: 'manager-student-enrollment', industry: 'Education', title: 'Manager Student Enrollment', currency: 'LKR', salaryMin: '200000', salaryMax: '300000', location: 'Sri Lanka', type: 'Education', workType: 'On-Site', date: 'January 16, 2026' },
  { slug: 'operations-excellence-sustainability-engineer', industry: 'Apparel', title: 'Operations Excellence & Sustainability Engineer', currency: 'LKR', salaryMin: '150000', salaryMax: '175000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'January 16, 2026' },

  // January 8, 2026
  { slug: 'marketing-manager-fmcg-jan8', industry: 'FMCG', title: 'Marketing Manager', currency: 'LKR', salaryMin: '800000', salaryMax: '900000', location: 'Sri Lanka', type: 'FMCG', workType: 'On-Site', date: 'January 8, 2026' },
  { slug: 'assistant-manager-finance-hospitality-jan8', industry: 'Hospitality', title: 'Assistant Manager Finance', currency: 'LKR', salaryMin: '', salaryMax: '200000', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'January 8, 2026' },
  { slug: 'general-manager-quality-cambodia', industry: 'Apparel', title: 'General Manager Quality', currency: 'USD', salaryMin: '6500', salaryMax: '7000', location: 'Cambodia', type: 'Apparel', workType: 'On-Site', date: 'January 8, 2026' },

  // January 3, 2026
  { slug: 'product-development-manager-apparel-bangladesh', industry: 'Apparel', title: 'Product Development Manager', currency: 'USD', salaryMin: '', salaryMax: '4998', location: 'Bangladesh', type: 'Apparel', workType: 'On-Site', date: 'January 3, 2026' },
  { slug: 'junior-product-development-manager-bangladesh', industry: 'Apparel', title: 'Junior Product Development Manager', currency: 'USD', salaryMin: '', salaryMax: '', location: 'Bangladesh', type: 'Apparel', workType: 'On-Site', date: 'January 3, 2026' },
  { slug: 'country-manager-buying-office', industry: 'Apparel', title: 'Country Manager – Buying Office', currency: 'USD', salaryMin: '', salaryMax: '', location: 'Bangladesh', type: 'Apparel', workType: 'On-Site', date: 'January 3, 2026' },
  { slug: 'head-of-quality-assurance-vietnam', industry: 'Apparel', title: 'Head of Quality Assurance', currency: 'USD', salaryMin: '6000', salaryMax: '6499', location: 'Vietnam', type: 'Apparel', workType: 'On-Site', date: 'January 3, 2026' },
  { slug: 'senior-safety-officer', industry: 'Other', title: 'Senior Safety Officer', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'January 3, 2026' },

  // December 24, 2025
  { slug: 'merchandise-manager-bangladesh', industry: 'Apparel', title: 'Merchandise Manager', currency: 'USD', salaryMin: '4500', salaryMax: '5000', location: 'Bangladesh', type: 'Apparel', workType: 'On-Site', date: 'December 24, 2025' },
  { slug: 'legal-manager-company-secretary', industry: 'Other', title: 'Legal Manager cum Company Secretary', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'December 24, 2025' },

  // December 19, 2025
  { slug: 'head-of-operations-dec19', industry: 'Other', title: 'Head of Operations', currency: 'LKR', salaryMin: '', salaryMax: '1100000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'December 19, 2025' },
  { slug: 'general-manager-hospitality-dec19', industry: 'Hospitality', title: 'General Manager', currency: 'LKR', salaryMin: '', salaryMax: '250000', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'December 19, 2025' },
  { slug: 'tech-lead-senior-tech-lead-mobile', industry: 'Information Technology', title: 'Tech Lead / Senior Tech Lead – Mobile Application Development', currency: 'LKR', salaryMin: '', salaryMax: '900000', location: 'Sri Lanka', type: 'Information Technology', workType: 'On-Site', date: 'December 19, 2025' },
  { slug: 'senior-key-account-manager-dec19', industry: 'Information Technology', title: 'Senior Key Account Manager', currency: 'LKR', salaryMin: '', salaryMax: '500000', location: 'Sri Lanka', type: 'Information Technology', workType: 'On-Site', date: 'December 19, 2025' },

  // December 18, 2025
  { slug: 'secretary-to-chairman', industry: 'Other', title: 'Secretary to Chairman', currency: 'LKR', salaryMin: '', salaryMax: '200000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'December 18, 2025' },
  { slug: 'senior-corporate-communication-executive', industry: 'Other', title: 'Senior Corporate Communication Executive / Assistant Manager', currency: 'LKR', salaryMin: '175000', salaryMax: '200000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'December 18, 2025' },
  { slug: 'area-sales-manager-fmcg-dec18', industry: 'FMCG', title: 'Area Sales Manager', currency: 'LKR', salaryMin: '', salaryMax: '200000', location: 'Sri Lanka', type: 'FMCG', workType: 'On-Site', date: 'December 18, 2025' },
  { slug: 'senior-key-account-manager-dec18', industry: 'Information Technology', title: 'Senior Key Account Manager', currency: 'LKR', salaryMin: '', salaryMax: '500000', location: 'Sri Lanka', type: 'Information Technology', workType: 'On-Site', date: 'December 18, 2025' },
  { slug: 'sales-executive-automative', industry: 'Automative', title: 'Sales Executive', currency: 'LKR', salaryMin: '', salaryMax: '80000', location: 'Sri Lanka', type: 'Automative', workType: 'On-Site', date: 'December 18, 2025' },

  // December 13, 2025
  { slug: 'general-manager-merchandising-bangladesh', industry: 'Apparel', title: 'General Manager – Merchandising', currency: 'USD', salaryMin: '8000', salaryMax: '9992', location: 'Bangladesh', type: 'Apparel', workType: 'On-Site', date: 'December 13, 2025' },
  { slug: 'showroom-manager-automative', industry: 'Automative', title: 'Showroom Manager', currency: 'LKR', salaryMin: '', salaryMax: '480000', location: 'Sri Lanka', type: 'Automative', workType: 'On-Site', date: 'December 13, 2025' },

  // December 12, 2025
  { slug: 'junior-executive-business-operations', industry: 'Other', title: 'Junior Executive / Executive Business Operations', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'December 12, 2025' },
  { slug: 'assistant-manager-lead-digital-growth', industry: 'Other', title: 'Assistant Manager – Lead Digital Growth', currency: 'LKR', salaryMin: '100000', salaryMax: '150000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'December 12, 2025' },
  { slug: 'food-beverage-manager-pastry-oman', industry: 'Other', title: 'Food & Beverage Manager – Pastry Operations', currency: 'USD', salaryMin: '', salaryMax: '1820', location: 'Oman', type: 'Other', workType: 'On-Site', date: 'December 12, 2025' },

  // December 11, 2025
  { slug: 'assistant-manager-talent-acquisition-dec11', industry: 'Other', title: 'Assistant Manager Talent Acquisition', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Other', workType: 'Hybrid', date: 'December 11, 2025' },
  { slug: 'food-beverage-manager-hospitality', industry: 'Hospitality', title: 'Food & Beverage Manager', currency: 'LKR', salaryMin: '275000', salaryMax: '300000', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'December 11, 2025' },
  { slug: 'bakery-manager-oman', industry: 'FMCG', title: 'Bakery Manager', currency: 'USD', salaryMin: '', salaryMax: '1820', location: 'Oman', type: 'FMCG', workType: 'On-Site', date: 'December 11, 2025' },
  { slug: 'deputy-general-manager-merchandising-bangladesh', industry: 'Apparel', title: 'Deputy General Manager Merchandising', currency: 'USD', salaryMin: '4000', salaryMax: '5000', location: 'Bangladesh', type: 'Apparel', workType: 'On-Site', date: 'December 11, 2025' },
  { slug: 'executive-legal-admin', industry: 'Other', title: 'Executive Legal and Admin', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'December 11, 2025' },

  // December 5, 2025
  { slug: 'hr-executive-recruitment-administration', industry: 'Other', title: 'HR Executive – Recruitment and Administration', currency: 'LKR', salaryMin: '65000', salaryMax: '75000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'December 5, 2025' },
  { slug: 'head-account-ops-pd-india', industry: 'Other', title: 'HEAD ACCOUNT OPS AND PD', currency: 'USD', salaryMin: '', salaryMax: '5498', location: 'India', type: 'Other', workType: 'On-Site', date: 'December 5, 2025' },
  { slug: 'digital-marketing-dec5', industry: 'Other', title: 'Digital Marketing', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'December 5, 2025' },
  { slug: 'production-manager-vietnam', industry: 'Apparel', title: 'Production Manager', currency: 'USD', salaryMin: '3000', salaryMax: '4000', location: 'Vietnam', type: 'Apparel', workType: 'On-Site', date: 'December 5, 2025' },
  { slug: 'technical-manager-vietnam', industry: 'Apparel', title: 'Technical Manager', currency: 'USD', salaryMin: '3000', salaryMax: '3998', location: 'Vietnam', type: 'Apparel', workType: 'On-Site', date: 'December 5, 2025' },
  { slug: 'factory-manager-vietnam', industry: 'Apparel', title: 'Factory Manager', currency: 'USD', salaryMin: '4000', salaryMax: '5000', location: 'Vietnam', type: 'Apparel', workType: 'On-Site', date: 'December 5, 2025' },

  // December 2, 2025
  { slug: 'head-of-finance-apparel-bangladesh-dec2', industry: 'Apparel', title: 'Head of Finance', currency: 'USD', salaryMin: '6000', salaryMax: '7999', location: 'Bangladesh', type: 'Apparel', workType: 'On-Site', date: 'December 2, 2025' },
  { slug: 'digital-transformation-manager-egypt', industry: 'Apparel', title: 'Digital Transformation Manager', currency: 'USD', salaryMin: '', salaryMax: '5500', location: 'Egypt', type: 'Apparel', workType: 'On-Site', date: 'December 2, 2025' },
  { slug: 'lead-head-hunter', industry: 'Other', title: 'Lead Head Hunter', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'December 2, 2025' },
  { slug: 'talent-acquisition-performance-strategy-lead', industry: 'Other', title: 'Talent Acquisition Performance & Strategy Lead', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'December 2, 2025' },
  { slug: 'assistant-manager-talent-acquisition-dec2', industry: 'Other', title: 'Assistant Manager Talent Acquisition', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'December 2, 2025' },
  { slug: 'talent-acquisition-partner', industry: 'Other', title: 'Talent Acquisition Partner', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Other', workType: 'Hybrid', date: 'December 2, 2025' },
  { slug: 'associate-operations-lead', industry: 'Other', title: 'Associate Operations Lead', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'December 2, 2025' },

  // November 29, 2025
  { slug: 'senior-executive-talent-acquisition-nov29', industry: 'Other', title: 'Senior Executive Talent Acquisition', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'November 29, 2025' },
  { slug: 'intern-business-coordinator', industry: 'Other', title: 'Intern Business Coordinator', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'November 29, 2025' },
  { slug: 'lead-assistant-manager-client-service', industry: 'Other', title: 'Lead / Assistant Manager Client Service', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'November 29, 2025' },
  { slug: 'executive-event-management', industry: 'Other', title: 'Executive – Event Management', currency: 'LKR', salaryMin: '', salaryMax: '75000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'November 29, 2025' },
  { slug: 'creative-video-editor', industry: 'Other', title: 'Creative Video Editor', currency: 'LKR', salaryMin: '65000', salaryMax: '100000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'November 29, 2025' },
  { slug: 'head-of-finance-apparel-egypt', industry: 'Apparel', title: 'Head of Finance', currency: 'USD', salaryMin: '', salaryMax: '6000', location: 'Egypt', type: 'Apparel', workType: 'On-Site', date: 'November 29, 2025' },

  // November 27, 2025
  { slug: 'operational-excellence-manager-automative', industry: 'Automative', title: 'Operational Excellence Manager', currency: 'LKR', salaryMin: '', salaryMax: '350000', location: 'Sri Lanka', type: 'Automative', workType: 'On-Site', date: 'November 27, 2025' },

  // November 25, 2025
  { slug: 'finance-manager-fmcg-saudi', industry: 'FMCG', title: 'Finance Manager', currency: 'USD', salaryMin: '', salaryMax: '6665', location: 'Saudi Arabia', type: 'FMCG', workType: 'On-Site', date: 'November 25, 2025' },
  { slug: 'assistant-manager-banquet-sales', industry: 'Hospitality', title: 'Assistant Manager Banquet Sales', currency: 'LKR', salaryMin: '160000', salaryMax: '170000', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'November 25, 2025' },
  { slug: 'assistant-manager-shift-operations', industry: 'Other', title: 'Assistant Manager – Shift Operations', currency: 'LKR', salaryMin: '280000', salaryMax: '350000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'November 25, 2025' },
  { slug: 'general-manager-hospitality-nov25', industry: 'Hospitality', title: 'General Manager', currency: 'LKR', salaryMin: '1000000', salaryMax: '1500000', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'November 25, 2025' },

  // November 22, 2025
  { slug: 'senior-lecturer-ai-data-science-bangladesh', industry: 'Education', title: 'Senior Lecturer – AI & Data Science / Head of Data Science', currency: 'USD', salaryMin: '', salaryMax: '', location: 'Bangladesh', type: 'Education', workType: 'On-Site', date: 'November 22, 2025' },
  { slug: 'sales-distribution-manager', industry: 'Other', title: 'Sales & Distribution Manager', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'November 22, 2025' },
  { slug: 'technical-product-manager-it', industry: 'Information Technology', title: 'Technical Product Manager', currency: 'LKR', salaryMin: '600000', salaryMax: '1000000', location: 'Sri Lanka', type: 'Information Technology', workType: 'On-Site', date: 'November 22, 2025' },
  { slug: 'tax-deputy-manager-manager-apparel', industry: 'Apparel', title: 'Tax Deputy Manager / Manager', currency: 'LKR', salaryMin: '400000', salaryMax: '450000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'November 22, 2025' },
  { slug: 'personal-secretary-personal-assistant-oman', industry: 'Other', title: 'Personal Secretary / Personal Assistant', currency: 'USD', salaryMin: '', salaryMax: '1500', location: 'Oman', type: 'Other', workType: 'On-Site', date: 'November 22, 2025' },
  { slug: 'senior-executive-international-sales-hospitality', industry: 'Hospitality', title: 'Senior Executive – International Sales', currency: 'LKR', salaryMin: '180000', salaryMax: '200000', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'November 22, 2025' },
  { slug: 'guest-experience-executive', industry: 'Hospitality', title: 'Guest Experience Executive', currency: 'LKR', salaryMin: '', salaryMax: '100000', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'November 22, 2025' },
  { slug: 'chief-operating-officer-apparel-bangladesh', industry: 'Apparel', title: 'Chief Operating Officer', currency: 'USD', salaryMin: '8000', salaryMax: '12000', location: 'Bangladesh', type: 'Apparel', workType: 'On-Site', date: 'November 22, 2025' },
  { slug: 'head-of-finance-apparel-lk', industry: 'Apparel', title: 'Head of Finance', currency: 'LKR', salaryMin: '1100000', salaryMax: '1300000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'November 22, 2025' },

  // November 20, 2025
  { slug: 'assistant-manager-hr-operation-fmcg', industry: 'FMCG', title: 'Assistant Manager -HR Operation', currency: 'LKR', salaryMin: '300000', salaryMax: '400000', location: 'Sri Lanka', type: 'FMCG', workType: 'On-Site', date: 'November 20, 2025' },
  { slug: 'executive-international-sales', industry: 'Other', title: 'Executive – International Sales', currency: 'LKR', salaryMin: '', salaryMax: '120000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'November 20, 2025' },
  { slug: 'manager-corporate-sales-hospitality', industry: 'Hospitality', title: 'Manager – Corporate Sales', currency: 'LKR', salaryMin: '400000', salaryMax: '450000', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'November 20, 2025' },

  // November 14, 2025
  { slug: 'country-lead-operations-it', industry: 'Information Technology', title: 'Country Lead – Operations', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Information Technology', workType: 'On-Site', date: 'November 14, 2025' },
  { slug: 'brand-manager-other-nov14', industry: 'Other', title: 'Brand Manager', currency: 'LKR', salaryMin: '250000', salaryMax: '350000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'November 14, 2025' },

  // November 13, 2025
  { slug: 'business-development-manager-luxury-hospitality-nov13', industry: 'Hospitality', title: 'Business Development Manager – Luxury Hospitality', currency: 'LKR', salaryMin: '200000', salaryMax: '270000', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'November 13, 2025' },
  { slug: 'human-resources-manager-apparel-nov13', industry: 'Apparel', title: 'Human Resources Manager', currency: 'LKR', salaryMin: '', salaryMax: '550000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'November 13, 2025' },
  { slug: 'cloud-engineer-it', industry: 'Information Technology', title: 'Cloud Engineer', currency: 'LKR', salaryMin: '350000', salaryMax: '390000', location: 'Sri Lanka', type: 'Information Technology', workType: 'On-Site', date: 'November 13, 2025' },
  { slug: 'general-manager-sales-marketing', industry: 'Other', title: 'General Manager Sales Marketing', currency: 'LKR', salaryMin: '500000', salaryMax: '700000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'November 13, 2025' },
  { slug: 'assistant-manager-hr-fmcg-nov13', industry: 'FMCG', title: 'Assistant Manager – HR', currency: 'LKR', salaryMin: '300000', salaryMax: '400000', location: 'Sri Lanka', type: 'FMCG', workType: 'On-Site', date: 'November 13, 2025' },
  { slug: 'assistant-manager-human-resources-apparel', industry: 'Apparel', title: 'Assistant Manager Human Resources', currency: 'LKR', salaryMin: '', salaryMax: '350000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'November 13, 2025' },
  { slug: 'assistant-manager-taxation-automative', industry: 'Automative', title: 'Assistant Manager Taxation', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Automative', workType: 'On-Site', date: 'November 13, 2025' },

  // November 7, 2025
  { slug: 'general-manager-hospitality-nov7', industry: 'Hospitality', title: 'General Manager', currency: 'LKR', salaryMin: '', salaryMax: '1000000', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'November 7, 2025' },

  // November 4, 2025
  { slug: 'embroidery-technical-specialist-dubai', industry: 'Apparel', title: 'Embroidery Technical Specialist', currency: 'USD', salaryMin: '3500', salaryMax: '4000', location: 'Dubai', type: 'Apparel', workType: 'On-Site', date: 'November 4, 2025' },
  { slug: 'product-development-manager-apparel-dubai', industry: 'Apparel', title: 'Product Development Manager', currency: 'USD', salaryMin: '3500', salaryMax: '4500', location: 'Dubai', type: 'Apparel', workType: 'On-Site', date: 'November 4, 2025' },
  { slug: 'automation-cutting-manager-dubai', industry: 'Apparel', title: 'Automation Cutting Manager', currency: 'USD', salaryMin: '3500', salaryMax: '5000', location: 'Dubai', type: 'Apparel', workType: 'On-Site', date: 'November 4, 2025' },
  { slug: 'head-of-people-and-culture-it', industry: 'Information Technology', title: 'Head of People and Culture', currency: 'LKR', salaryMin: '1000000', salaryMax: '14999999', location: 'Sri Lanka', type: 'Information Technology', workType: 'On-Site', date: 'November 4, 2025' },

  // October 28, 2025
  { slug: 'erp-team-lead-managerial', industry: 'Other', title: 'ERP – TEAM LEAD – (Managerial level)', currency: 'LKR', salaryMin: '', salaryMax: '600000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'October 28, 2025' },
  { slug: 'factory-accountant', industry: 'Other', title: 'Factory Accountant', currency: 'LKR', salaryMin: '400000', salaryMax: '450000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'October 28, 2025' },
  { slug: 'electrical-engineer', industry: 'Other', title: 'Electrical Engineer', currency: 'LKR', salaryMin: '125000', salaryMax: '150000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'October 28, 2025' },
  { slug: 'automation-engineer', industry: 'Other', title: 'Automation Engineer', currency: 'LKR', salaryMin: '125000', salaryMax: '150000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'October 28, 2025' },
  { slug: 'assistant-manager-accounts-payable-oct28', industry: 'Other', title: 'Assistant Manager Accounts Payable', currency: 'LKR', salaryMin: '300000', salaryMax: '350000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'October 28, 2025' },

  // October 25, 2025
  { slug: 'head-of-marketing-oct25', industry: 'Other', title: 'Head of Marketing', currency: 'LKR', salaryMin: '1000000', salaryMax: '1200000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'October 25, 2025' },
  { slug: 'manager-hr-general-affairs-india', industry: 'Other', title: 'Manager – Human Resources & General Affairs (Manufacturing / Factory HR)', currency: 'USD', salaryMin: '17000', salaryMax: '22600', location: 'India', type: 'Other', workType: 'On-Site', date: 'October 25, 2025' },
  { slug: 'head-director-finance-apparel-india', industry: 'Apparel', title: 'Head / Director Finance', currency: 'USD', salaryMin: '5000', salaryMax: '6000', location: 'India', type: 'Apparel', workType: 'On-Site', date: 'October 25, 2025' },
  { slug: 'chief-financial-officer-lk-oct25', industry: 'Other', title: 'Chief Financial Officer', currency: 'LKR', salaryMin: '1200000', salaryMax: '1500000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'October 25, 2025' },
  { slug: 'senior-printing-technologist-india', industry: 'Apparel', title: 'Senior Printing Technologist – Offset & Digital Printing', currency: 'USD', salaryMin: '', salaryMax: '', location: 'India', type: 'Apparel', workType: 'On-Site', date: 'October 25, 2025' },
  { slug: 'manager-production-offset-digital-printing-india', industry: 'Other', title: 'Manager Production – Offset Printing and Digital Printing', currency: 'USD', salaryMin: '2500', salaryMax: '3500', location: 'India', type: 'Other', workType: 'On-Site', date: 'October 25, 2025' },

  // October 23, 2025
  { slug: 'brand-manager-other-oct23', industry: 'Other', title: 'Brand Manager', currency: 'LKR', salaryMin: '', salaryMax: '350000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'October 23, 2025' },
  { slug: 'brand-executive', industry: 'Other', title: 'Brand Executive', currency: 'LKR', salaryMin: '60002', salaryMax: '80000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'October 23, 2025' },

  // October 21, 2025
  { slug: 'business-development-manager-luxury-boutique-hospitality', industry: 'Hospitality', title: 'Business Development Manager – Luxury Boutique Hospitality', currency: 'LKR', salaryMin: '200000', salaryMax: '250000', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'October 21, 2025' },
  { slug: 'project-engineer-power-energy', industry: 'Power & Energy', title: 'Project Engineer', currency: 'LKR', salaryMin: '', salaryMax: '450000', location: 'Sri Lanka', type: 'Power & Energy', workType: 'On-Site', date: 'October 21, 2025' },
  { slug: 'restaurant-general-manager', industry: 'Hospitality', title: 'Restaurant General Manager', currency: 'LKR', salaryMin: '', salaryMax: '600000', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'October 21, 2025' },

  // October 20, 2025
  { slug: 'assistant-manager-manager-customer-value-management', industry: 'Other', title: 'Assistant Manager / Manager Customer Value Management', currency: 'LKR', salaryMin: '300000', salaryMax: '400000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'October 20, 2025' },
  { slug: 'manager-structural-packaging-development-india', industry: 'Other', title: 'Manager – Structural Packaging Development', currency: 'USD', salaryMin: '', salaryMax: '', location: 'India', type: 'Other', workType: 'On-Site', date: 'October 20, 2025' },
  { slug: 'head-of-production-automative-india', industry: 'Automative', title: 'Head of Production', currency: 'USD', salaryMin: '', salaryMax: '4000', location: 'India', type: 'Automative', workType: 'On-Site', date: 'October 20, 2025' },

  // October 17, 2025
  { slug: 'manager-accounts-payable-oct17', industry: 'Other', title: 'Manager Accounts Payable', currency: 'LKR', salaryMin: '', salaryMax: '350000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'October 17, 2025' },
  { slug: 'talent-organizational-development-manager', industry: 'Apparel', title: 'Talent & Organizational Development Manager', currency: 'LKR', salaryMin: '', salaryMax: '650000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'October 17, 2025' },
  { slug: 'operations-hr-manager-apparel', industry: 'Apparel', title: 'Operations HR Manager', currency: 'LKR', salaryMin: '350000', salaryMax: '450000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'October 17, 2025' },
  { slug: 'assistant-manager-hr-administration-apparel', industry: 'Apparel', title: 'Assistant Manager – HR & Administration', currency: 'LKR', salaryMin: '200000', salaryMax: '250000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'October 17, 2025' },

  // October 16, 2025
  { slug: 'enterprise-sales-manager-singapore', industry: 'Information Technology', title: 'Enterprise Sales Manager', currency: 'USD', salaryMin: '7000', salaryMax: '8000', location: 'Singapore', type: 'Information Technology', workType: 'On-Site', date: 'October 16, 2025' },
  { slug: 'senior-internal-auditor-bangladesh', industry: 'Other', title: 'Senior Internal Auditor', currency: 'LKR', salaryMin: '', salaryMax: '500000', location: 'Bangladesh', type: 'Other', workType: 'On-Site', date: 'October 16, 2025' },

  // October 14, 2025
  { slug: 'supply-chain-director-bangladesh', industry: 'Other', title: 'Supply Chain Director', currency: 'LKR', salaryMin: '10000', salaryMax: '12000', location: 'Bangladesh', type: 'Other', workType: 'On-Site', date: 'October 14, 2025' },

  // October 8, 2025
  { slug: 'director-of-manufacturing-bangladesh', industry: 'Other', title: 'Director of Manufacturing', currency: 'USD', salaryMin: '10000', salaryMax: '12000', location: 'Bangladesh', type: 'Other', workType: 'On-Site', date: 'October 8, 2025' },
  { slug: 'sap-project-manager', industry: 'Other', title: 'SAP Project Manager', currency: 'LKR', salaryMin: '', salaryMax: '450000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'October 8, 2025' },
  { slug: 'hotel-manager', industry: 'Hospitality', title: 'Hotel Manager', currency: 'LKR', salaryMin: '450000', salaryMax: '550000', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'October 8, 2025' },

  // October 2, 2025
  { slug: 'assistant-tax-manager-oct2', industry: 'Other', title: 'Assistant Tax Manager', currency: 'LKR', salaryMin: '150000', salaryMax: '160000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'October 2, 2025' },
  { slug: 'maintenance-engineer', industry: 'Other', title: 'Maintenance Engineer', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'October 2, 2025' },
  { slug: 'head-of-marketing-automative', industry: 'Automative', title: 'Head of Marketing', currency: 'LKR', salaryMin: '500000', salaryMax: '599999', location: 'Sri Lanka', type: 'Automative', workType: 'On-Site', date: 'October 2, 2025' },
  { slug: 'general-manager-human-resources', industry: 'Other', title: 'General Manager Human Resources', currency: 'LKR', salaryMin: '1200000', salaryMax: '2000000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'October 2, 2025' },

  // September 30, 2025
  { slug: 'product-development-manager-education-india', industry: 'Education', title: 'Product Development Manager', currency: 'USD', salaryMin: '', salaryMax: '3999', location: 'India', type: 'Education', workType: 'On-Site', date: 'September 30, 2025' },

  // September 26, 2025
  { slug: 'factory-plant-accountant-apparel', industry: 'Apparel', title: 'Factory / Plant Accountant', currency: 'LKR', salaryMin: '180000', salaryMax: '350000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'September 26, 2025' },
  { slug: 'business-development-executive-sep26', industry: 'Other', title: 'Business Development Executive', currency: 'LKR', salaryMin: '100000', salaryMax: '140000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'September 26, 2025' },

  // September 25, 2025
  { slug: 'assistant-manager-pre-press-production', industry: 'Other', title: 'Assistant Manager – Pre-Press Production (Printing)', currency: 'LKR', salaryMin: '180000', salaryMax: '220000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'September 25, 2025' },
  { slug: 'deputy-general-manager-marketing-automative', industry: 'Automative', title: 'Deputy General Manager Marketing', currency: 'LKR', salaryMin: '400000', salaryMax: '550000', location: 'Sri Lanka', type: 'Automative', workType: 'On-Site', date: 'September 25, 2025' },

  // September 23, 2025
  { slug: 'lead-assistant-manager-talent-operations-analytics', industry: 'Other', title: 'Lead / Assistant Manager – Talent Operations & Business Analytics', currency: 'LKR', salaryMin: '', salaryMax: '170000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'September 23, 2025' },
  { slug: 'manager-business-analysis', industry: 'Other', title: 'Manager Business Analysis', currency: 'LKR', salaryMin: '350000', salaryMax: '400000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'September 23, 2025' },
  { slug: 'general-manager-tax', industry: 'Other', title: 'General Manager – Tax', currency: 'LKR', salaryMin: '650000', salaryMax: '800000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'September 23, 2025' },
  { slug: 'chief-financial-officer-lk-sep23', industry: 'Other', title: 'Chief Financial Officer', currency: 'LKR', salaryMin: '1200000', salaryMax: '1500000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'September 23, 2025' },
  { slug: 'head-of-finance-other-sep23', industry: 'Other', title: 'Head of Finance', currency: 'LKR', salaryMin: '800000', salaryMax: '1000000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'September 23, 2025' },
  { slug: 'general-manager-quality-bangladesh-sep23', industry: 'Apparel', title: 'General Manager Quality', currency: 'USD', salaryMin: '4000', salaryMax: '5000', location: 'Bangladesh', type: 'Apparel', workType: 'On-Site', date: 'September 23, 2025' },
  { slug: 'digital-marketing-executive-sep23', industry: 'Other', title: 'Digital Marketing Executive', currency: 'LKR', salaryMin: '', salaryMax: '150000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'September 23, 2025' },
  { slug: 'head-of-operations-fmcg', industry: 'FMCG', title: 'Head of Operations', currency: 'LKR', salaryMin: '200000', salaryMax: '300000', location: 'Sri Lanka', type: 'FMCG', workType: 'On-Site', date: 'September 23, 2025' },

  // September 19, 2025
  { slug: 'assistant-brand-manager-fmcg-sep19', industry: 'FMCG', title: 'Assistant Brand Manager', currency: 'LKR', salaryMin: '', salaryMax: '250000', location: 'Sri Lanka', type: 'FMCG', workType: 'On-Site', date: 'September 19, 2025' },
  { slug: 'deputy-general-manager-printing', industry: 'Apparel', title: 'Deputy General Manager – Printing', currency: 'LKR', salaryMin: '700000', salaryMax: '800000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'September 19, 2025' },

  // September 18, 2025
  { slug: 'supply-chain-executive-sep18', industry: 'Other', title: 'Supply Chain Executive', currency: 'LKR', salaryMin: '80000', salaryMax: '150000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'September 18, 2025' },
  { slug: 'supervisor-pre-production-operations', industry: 'Other', title: 'Supervisor – Pre-Production Operations', currency: 'LKR', salaryMin: '150000', salaryMax: '200000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'September 18, 2025' },

  // September 12, 2025
  { slug: 'senior-finance-manager-fmcg', industry: 'FMCG', title: 'Senior Finance Manager', currency: 'LKR', salaryMin: '400000', salaryMax: '499999', location: 'Sri Lanka', type: 'FMCG', workType: 'On-Site', date: 'September 12, 2025' },
  { slug: 'senior-manager-supply-chain-fmcg', industry: 'FMCG', title: 'Senior Manager – Supply Chain', currency: 'LKR', salaryMin: '350000', salaryMax: '450000', location: 'Sri Lanka', type: 'FMCG', workType: 'On-Site', date: 'September 12, 2025' },

  // September 11, 2025
  { slug: 'senior-executive-mechanical-engineering', industry: 'Apparel', title: 'Senior Executive – Mechanical Engineering', currency: 'LKR', salaryMin: '160000', salaryMax: '180000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'September 11, 2025' },
  { slug: 'general-manager-operations-apparel', industry: 'Apparel', title: 'General Manager Operations', currency: 'LKR', salaryMin: '', salaryMax: '1500000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'September 11, 2025' },
  { slug: 'junior-brand-executive', industry: 'Other', title: 'Junior Brand Executive', currency: 'LKR', salaryMin: '', salaryMax: '80000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'September 11, 2025' },

  // September 9, 2025
  { slug: 'assistant-production-manager', industry: 'Apparel', title: 'Assistant Production Manager', currency: 'LKR', salaryMin: '150000', salaryMax: '200000', location: 'Sri Lanka', type: 'Apparel', workType: 'On-Site', date: 'September 9, 2025' },
  { slug: 'senior-executive-human-resources-sep9', industry: 'Other', title: 'Senior Executive Human Resources', currency: 'LKR', salaryMin: '', salaryMax: '180000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'September 9, 2025' },
  { slug: 'digital-marketing-lead', industry: 'Other', title: 'Digital Marketing Lead', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'September 9, 2025' },
  { slug: 'internal-auditor-sep9', industry: 'Other', title: 'Internal Auditor', currency: 'LKR', salaryMin: '', salaryMax: '200000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'September 9, 2025' },

  // September 2, 2025
  { slug: 'general-manager-industrial-engineering-bangladesh', industry: 'Apparel', title: 'General Manager – Industrial Engineering', currency: 'USD', salaryMin: '4500', salaryMax: '6000', location: 'Bangladesh', type: 'Apparel', workType: 'On-Site', date: 'September 2, 2025' },
  { slug: 'senior-executive-talent-acquisition-sep2', industry: 'Other', title: 'Senior Executive Talent Acquisition', currency: 'LKR', salaryMin: '', salaryMax: '95000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'September 2, 2025' },
  { slug: 'general-manager-hospitality-sep2', industry: 'Hospitality', title: 'General Manager', currency: 'LKR', salaryMin: '1200000', salaryMax: '1500000', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'September 2, 2025' },
  { slug: 'supply-chain-executive-sep2', industry: 'Other', title: 'Supply Chain Executive', currency: 'LKR', salaryMin: '130000', salaryMax: '150000', location: 'Sri Lanka', type: 'Other', workType: 'On-Site', date: 'September 2, 2025' },
  { slug: 'business-analyst-hospitality-sep2', industry: 'Hospitality', title: 'Business Analyst', currency: 'LKR', salaryMin: '', salaryMax: '', location: 'Sri Lanka', type: 'Hospitality', workType: 'On-Site', date: 'September 2, 2025' },
]

export function getPremiumJobBySlug(slug: string): PremiumJob | undefined {
  return premiumJobCards.find((job) => job.slug === slug)
}