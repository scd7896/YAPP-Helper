import * as React from "react";
interface SelectCheck {
  isSelect?: boolean;
}
export const LogOutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10">
    <g fill="none" fill-rule="evenodd">
      <g stroke="#AEAFAE" strokeLinecap="round">
        <path
          d="M4.506 4.456L4.5 0M2.299.67C.932 1.437 0 2.893 0 4.57c0 2.485 2.013 4.497 4.496 4.497 2.476 0 4.489-2.012 4.489-4.496 0-1.62-.87-3.031-2.156-3.817"
          transform="translate(-1 -2) translate(2 2)"
        />
      </g>
    </g>
  </svg>
);

export const ArrowBottom = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="4" viewBox="0 0 10 4">
    <path fill="none" fillRule="evenodd" stroke="#565A61" d="M100 26L104 30 108 26" transform="translate(-99 -26)" />
  </svg>
);

export const FolderIcon: React.FC<SelectCheck> = ({ isSelect }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
    <g fill="none" fillRule="evenodd">
      <path
        fill={isSelect ? "#3562FF" : "#CBCBCB"}
        d="M9.524 18.301L4 17.01V3.064l6.117 1.432c.59.137 1.006.662 1.006 1.267v11.27c0 .84-.782 1.46-1.599 1.268"
        transform="translate(-4 -3)"
      />
      <path
        fill={isSelect ? "#3562FF" : "#CBCBCB"}
        d="M15.91 15.267c0 .926-.754 1.68-1.68 1.68h-2.44V5.77c0-.92-.624-1.707-1.52-1.917L6.622 3h7.606c.927 0 1.68.753 1.68 1.68v10.587z"
        transform="translate(-4 -3)"
      />
    </g>
  </svg>
);

export const SendIcon: React.FC<SelectCheck> = ({ isSelect }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14">
    <g fill="none" fillRule="evenodd">
      <path
        fill={isSelect ? "#3562FF" : "#CBCBCB"}
        d="M3 4.555c0-.422.558-.69 1.012-.484l12.83 5.787c1.004.454 1.004 1.629 0 2.082l-12.83 5.788C3.558 17.933 3 17.666 3 17.244v-5.14l10.195-1.057c.253-.026.253-.17 0-.196L3 9.795v-5.24z"
        transform="translate(-3 -4)"
      />
    </g>
  </svg>
);

export const PencilIcon: React.FC<SelectCheck> = ({ isSelect }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
    <g fill={isSelect ? "#3562FF" : "#CBCBCB"} fillRule="evenodd">
      <path
        d="M15.46 5.976l-.538.503-3.417-3.665.539-.502c.974-.908 2.496-.858 3.4.112l.142.152c.904.97.849 2.492-.125 3.4M11.094 3.197l3.417 3.665-8.286 7.726c-.091.086-.208.14-.332.156l-3.227.33c-.374.036-.683-.295-.614-.667l.581-3.168c.02-.118.08-.227.17-.31l8.291-7.732z"
        transform="translate(-2 -1)"
      />
    </g>
  </svg>
);
