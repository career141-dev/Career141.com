import React from 'react';
import styles from '../styles/DivELoopLoadMore.module.css';

interface DivELoopLoadMoreProps {
  onClick?: (e: React.MouseEvent) => void;
}

export default function DivELoopLoadMore({ onClick }: DivELoopLoadMoreProps) {
  return (
    <div className={styles.DivELoopLoadMore_199_9835}>
      <button 
        type="button"
        className={styles.AElementorButtonLink_199_9836} 
        onClick={onClick}
      >
        <div className={styles.SpanElementorButtonContentWrapper_199_9837}>
          <div className={styles.SpanElementorButtonText_199_9838}>
            <span className={styles.LoadMore_199_9839}>Load More</span>
          </div>
        </div>
      </button>
    </div>
  );
}
