import { premiumJobCards } from '../src/components/premium-jobs/premiumJobsData';
import { jobDetailsBySlug } from '../src/components/premium-jobs/jobDetailsData';
import * as fs from 'fs';

const defaultRoles = [
  { type: 'paragraph', text: 'The General Manager – Sales will be a strategic business leader responsible for accelerating market share, revenue growth, dealer performance, and brand positioning for a leading 4-wheeler automotive portfolio.' },
  { type: 'paragraph', text: 'This role requires a proven senior-level sales strategist with exceptional team-building capability, commercial acumen, and the leadership strength to steer premium brands in a highly competitive, fast-paced automotive market.' },
  { type: 'paragraph', text: 'The incumbent will play a critical role in shaping go-to-market strategy, strengthening dealer ecosystems, building high-performance sales teams, and delivering sustainable profitability.' },
  { type: 'heading', text: 'Leadership Expectations' },
  { type: 'paragraph', text: 'The ideal candidate will demonstrate:' },
  { type: 'bullets', items: [
    'Brand & Business Ownership P&L Mindset: Ownership thinking with long-term brand stewardship.',
    'Strategic Vision: Ability to scale and reposition brands in competitive markets.',
    'Team Builder: Proven ability to build strong leadership pipelines.',
    'Inspirational Communicator: Clear, persuasive communication with board, OEM, dealers, and teams.',
    'Operational Discipline: Ability to deliver results through structured processes.',
    'Customer-Centric Thinking: Passion for delivering exceptional ownership experience.'
  ]},
  { type: 'heading', text: 'Key Responsibilities' },
  { type: 'heading', text: '1. Strategic Sales Leadership' },
  { type: 'bullets', items: [
    'Develop and execute national sales strategy aligned with corporate growth targets.',
    'Drive volume, revenue, and profitability across new vehicle sales, fleet sales, and strategic accounts.',
    'Lead market penetration strategies across key regions and segments.',
    'Identify new market opportunities, emerging customer segments, and strategic partnerships.',
    'Benchmark performance against global automotive best practices and competitors.'
  ]},
  { type: 'heading', text: '2. Dealer Network & Channel Management' },
  { type: 'bullets', items: [
    'Strengthen and expand dealer networks with clear performance metrics and profitability frameworks.',
    'Drive dealer capability development, showroom experience excellence, and customer journey optimization.',
    'Implement structured dealer evaluation, incentive programs, and growth plans.',
    'Build strong long-term relationships with dealer principals and partners.'
  ]},
  { type: 'heading', text: '3. Team Building & Leadership Excellence' },
  { type: 'bullets', items: [
    'Build, mentor, and lead a high-performance national sales organization.',
    'Identify talent gaps and develop succession pipelines for future leadership.',
    'Foster a culture of accountability, collaboration, innovation, and customer obsession.',
    'Coach regional managers and frontline teams to exceed targets consistently.',
    'Implement structured performance management, KPIs, and capability-building programs.'
  ]},
  { type: 'heading', text: '4. Brand Growth & Market Positioning' },
  { type: 'bullets', items: [
    'Partner with Marketing to drive brand equity, product launches, and campaign strategies.',
    'Strengthen brand positioning in premium, mid-range, and emerging segments.',
    'Monitor customer insights and competitor intelligence to refine brand strategy.',
    'Ensure consistent brand experience across dealerships and digital channels.'
  ]},
  { type: 'heading', text: '5. Business & Commercial Acumen' },
  { type: 'bullets', items: [
    'Own sales forecasting, budgeting, pricing strategy, and margin optimization.',
    'Deliver strong P&L performance with disciplined cost and revenue management.',
    'Analyze market data, consumer trends, and product performance for strategic decisions.',
    'Lead fleet and corporate sales strategies to drive large-scale business opportunities.'
  ]},
  { type: 'heading', text: '6. Customer & Stakeholder Engagement' },
  { type: 'bullets', items: [
    'Build strong relationships with key corporate clients, financiers, and partners.',
    'Enhance customer experience across the full lifecycle – inquiry to after-sales.',
    'Represent the company in industry forums, OEM partnerships, and key negotiations.'
  ]},
  { type: 'heading', text: '7. Operational Excellence' },
  { type: 'bullets', items: [
    'Drive CRM adoption, digital sales platforms, and analytics-driven decision making.',
    'Implement process improvements to increase conversion rates and productivity.',
    'Ensure compliance with regulatory, financial, and OEM standards.'
  ]}
];

const defaultPreRequisites = [
  { type: 'heading', text: 'Educational & Professional Qualifications' },
  { type: 'bullets', items: [
    'Bachelor\'s Degree / MBA in Business Administration, Marketing, Engineering, Automotive Management, or a related discipline from a recognized university.',
    '12–18+ years of experience in automotive or related industries.',
    'Minimum 5–8 years in senior leadership roles such as: General Manager – Sales, National Sales Head, Head of Automotive Sales, Business Unit Head – Automotive.',
    'Proven track record of delivering high revenue growth and managing dealer networks in branded 4-wheeler vehicle segments.',
    'Strong exposure to after-sales operations, spare parts strategy, and cross-functional automotive leadership preferred'
  ]}
];

const jobs = premiumJobCards.map((job) => {
  const existingDetails = jobDetailsBySlug[job.slug];
  
  if (existingDetails) {
    return {
      ...job,
      details: {
        roles: existingDetails.roles,
        preRequisites: existingDetails.preRequisites
      },
      isDefaultContent: false
    };
  } else {
    return {
      ...job,
      details: {
        roles: defaultRoles,
        preRequisites: defaultPreRequisites
      },
      isDefaultContent: true
    };
  }
});

fs.writeFileSync('./src/data/premium_jobs.json', JSON.stringify(jobs, null, 2));
console.log(`Successfully merged ${jobs.length} jobs into premium_jobs.json`);
console.log(`${jobs.filter(j => j.isDefaultContent).length} jobs used default placeholder content.`);
