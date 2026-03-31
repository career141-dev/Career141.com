import React from 'react';
import styles from '../styles/AElementorElement.module.css';
import { ArrowRight } from 'lucide-react';

interface JobCardProps {
  category?: string;
  title?: string;
  salary?: string;
  location?: string;
  industry?: string;
  workType?: string;
  date?: string;
}

export default function AElementorElement({
  category = "Other",
  title = "Head of Operations – Modern Trade (Supermarket Chain)",
  salary = "LKR -",
  location = "Sri Lanka",
  industry = "Other",
  workType = "On-Site",
  date = "February 27, 2026"
}: JobCardProps) {
  return (
    <div className={styles.AElementorElement_187_1478}>
      <div className={styles.JobCardPostSvgFill_187_1479}>
        <div className={styles.JobCardPostSvg_187_1480}>
          <svg width="359" height="396" viewBox="0 0 359 396" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <g clipPath="url(#clip0_187_1480)">
              <path d="M358.13 51.4415V395.222H1.957H1.30466H0V0H304.639L358.13 51.4415Z" fill="#006763" />
            </g>
            <defs>
              <clipPath id="clip0_187_1480">
                <rect width="358.895" height="395.6" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      
      <div className={styles.DivElementorElement_187_1482}>
        <div className={styles.DivEConInner_187_1483}>
          <div className={styles.DivElementorElement_187_1484}>
            <div className={styles.DivElementorElement_187_1485}>
              <div className={styles.DivElementorWidgetContainer_187_1486}>
                <span className={styles.Other_187_1487}>{category}</span>
              </div>
            </div>
          </div>
          
          <div className={styles.DivElementorElement_187_1488}>
            <div className={styles.DivElementorWidgetContainer_187_1489}>
              <div className={styles.H2ElementorHeadingTitle_187_1490}>
                <h2 className={styles.HeadOfOperationsModernTradeSupermarketChain_187_1491}>
                  {title}
                </h2>
              </div>
            </div>
          </div>
          
          <div className={styles.DivElementorElement_187_1492}>
            <div className={styles.DivEConInner_187_1493}>
              <div className={styles.DivElementorElement_187_1494}>
                <div className={styles.DivElementorWidgetContainer_187_1495}>
                  <span className={styles.Lkr_187_1496}>{salary.split(' ')[0]}</span>
                </div>
              </div>
              <div className={styles.DivElementorElement_187_1497}>
                <div className={styles.DivElementorWidgetContainer_187_1498}>
                  <span className={styles.generated__187_1499}>{salary.split(' ')[1] || '-'}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.DivElementorElement_187_1500}>
            <div className={styles.DivElementorWidgetContainer_187_1501}>
              <div className={styles.PElementorHeadingTitle_187_1502}>
                <span className={styles.SriLanka_187_1503}>{location}</span>
              </div>
            </div>
          </div>
          
          <div className={styles.DivElementorElement_187_1504}>
            <div className={styles.DivElementorWidgetContainer_187_1505}>
              <div className={styles.PElementorHeadingTitle_187_1506}>
                <span className={styles.Other_187_1507}>{industry}</span>
              </div>
            </div>
          </div>
          
          <div className={styles.DivElementorElement_187_1508}>
            <div className={styles.DivElementorWidgetContainer_187_1509}>
              <div className={styles.PElementorHeadingTitle_187_1510}>
                <span className={styles.OnSite_187_1511}>{workType}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.DivElementorElement_187_1512}>
        <div className={styles.DivEConInner_187_1513}>
          <div className={styles.DivElementorElement_187_1514}>
            <div className={styles.DivElementorWidgetContainer_187_1515}>
              <span className={styles.February_27_2026_187_1516}>{date}</span>
            </div>
          </div>
          <div className={styles.DivElementorElement_187_1517}>
            <div className={styles.DivElementorWidgetContainer_187_1518}>
              <div className={styles.DivElementorIconWrapper_187_1519}>
                <div className={styles.DivElementorIcon_187_1520}>
                  <div className={styles.SpanH2dRemoveBefore_187_1521}>
                    <ArrowRight className="text-[#cbfc06] w-[16px] h-[16px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
