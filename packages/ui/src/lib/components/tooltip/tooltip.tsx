'use client';

import React from 'react';
import {
  OverlayArrow,
  Tooltip as ReactTooltip,
  TooltipTrigger,
  TooltipProps,
} from 'react-aria-components';

interface Props extends TooltipProps {
  children: React.ReactNode;
  content: string | React.ReactNode;
}

export const Tooltip: React.FC<Props> = ({ children, content, ...props }) => {
  return (
    <TooltipTrigger>
      {children}
      <ReactTooltip {...props}>
        <OverlayArrow>
          <svg width={8} height={8} viewBox="0 0 8 8">
            <path d="M0 0 L4 4 L8 0" />
          </svg>
        </OverlayArrow>
        {content}
      </ReactTooltip>
    </TooltipTrigger>
  );
};
