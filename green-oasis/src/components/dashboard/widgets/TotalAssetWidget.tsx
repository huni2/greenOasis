'use client';

import { StyledWidget } from './Widget.styles';

export default function TotalAssetWidget() {
  return (
    <StyledWidget>
      <div className="statistics-current-style-01">
        <div className="master-current-contents">
          <div className="dot-shape-1">
            <p>Super EQ Master</p>
            <span>5,950,000</span>
          </div>
          <div className="dot-shape-2">
            <p>EQ Master</p>
            <span>14,950,000</span>
          </div>
          <div className="dot-shape-3">
            <p>Tracker</p>
            <span>14,950,000(100%)</span>
          </div>
        </div>
      </div>
    </StyledWidget>
  );
} 