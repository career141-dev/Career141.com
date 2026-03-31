import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import styles from './JobCard.module.css';

export interface Job {
  industry: string;
  title: string;
  currency: string;
  salaryMin: string | null;
  salaryMax: string | null;
  location: string;
  type: string;
  workType: string;
  date: string;
}

interface JobCardProps {
  job: Job;
  index?: number;
}

function formatSalaryLine(job: Job): string {
  const { currency, salaryMin, salaryMax } = job
  const min = salaryMin?.trim() ?? ''
  const max = salaryMax?.trim() ?? ''
  if (!min && !max) return `${currency} -`
  if (min && max) return `${currency} ${min} - ${max}`
  if (min) return `${currency} ${min}`
  return `${currency} ${max}`
}

export const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  return (
    <div className={styles.AElementorElement} data-testid={index !== undefined ? `card-job-${index}` : undefined}>
      <div className={styles.CardInner}>
        <div className={styles.JobCardPostSvgFill}>
          <div className={styles.JobCardPostSvg}>
            <svg width="359" height="396" viewBox="0 0 359 396" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_11_2454)">
                <path d="M358.13 51.4415V395.222H1.957H1.30466H0V0H304.639L358.13 51.4415Z" fill="#006763" />
              </g>
              <defs>
                <clipPath id="clip0_11_2454">
                  <rect width="358.895" height="395.6" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div className={styles.MainContentWrapper}>
          <div className={styles.DivEConInner}>
            <div className={styles.CategoryWrapper}>
              <span className={styles.Category}>{job.type}</span>
            </div>
            <div className={styles.TitleSection}>
              <span className={styles.Title}>{job.title}</span>
            </div>
            <div className={styles.DetailRow}>
              <span className={styles.DetailText}>{formatSalaryLine(job)}</span>
            </div>
            <div className={styles.DetailRow}>
              <span className={styles.DetailText}>{job.location}</span>
            </div>
            <div className={styles.DetailRow}>
              <span className={styles.DetailText}>{job.industry}</span>
            </div>
            <div className={styles.DetailRow}>
              <span className={styles.DetailText}>{job.workType}</span>
            </div>
          </div>
        </div>

        <div className={styles.CardFooter}>
          <div className={styles.FooterInner}>
            <div className={styles.DateText}>{job.date}</div>
            <div className={styles.ActionButtonWrapper}>
              <div className={styles.IconWrapper}>
                <ArrowRightIcon size={18} className={styles.Symbol} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
