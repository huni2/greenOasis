'use client';

import { StyledWidget } from './Widget.styles';

export default function TrackerStatusWidget() {
  return (
    <StyledWidget>
      <div className="statistics-current-style-01">
        <div className="master-current-contents">
          <div className="important-spot">
            <p>Total</p>
            <span>2,450,000,850</span>
          </div>
          <div className="normal-state">
            <p>정상</p>
            <span>14,950,000</span>
          </div>
          <div className="error-state">
            <p>장애</p>
            <span>149,500</span>
          </div>
          <div className="dead-state">
            <p>대기</p>
            <span>14,950,000</span>
          </div>
          <div className="disuse-state">
            <p>폐기</p>
            <span>14,950,000</span>
          </div>
        </div>
      </div>
    </StyledWidget>
  );
} 