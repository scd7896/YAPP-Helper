import * as React from "react";
interface SelectCheck {
  isSelect?: boolean;
}
export const LogOutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10">
    <g fill="none" fillRule="evenodd">
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

export const ExelFileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="43"
    height="54"
    viewBox="0 0 43 54"
  >
    <defs>
      <path id="51x62uakua" d="M0.645 0.713L12.47 0.713 12.47 12.592 0.645 12.592z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g>
        <g>
          <g>
            <g>
              <g>
                <g>
                  <path
                    fill="#3562FF"
                    d="M42.44 12.463V49.97c0 2.225-1.806 4.029-4.02 4.029H4.02C1.804 54 0 52.196 0 49.97V4.915C0 2.689 1.805.885 4.02.885h26.896L42.44 12.463z"
                    transform="translate(-726 -297) translate(726 297)"
                  />
                  <g transform="translate(-726 -297) translate(726 297) translate(30.099)">
                    <mask id="oewutacc1b" fill="#fff">
                      <use xlinkHref="#51x62uakua" />
                    </mask>
                    <path
                      fill="#B2CAFF"
                      d="M12.47 12.592H2.818c-1.206 0-2.173-.982-2.173-2.181V.712l11.825 11.88z"
                      mask="url(#oewutacc1b)"
                    />
                  </g>
                  <path
                    stroke="#FFF"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M30.132 45.253H11.759c-1.816 0-3.287-1.389-3.287-3.102V25.356c0-1.714 1.471-3.103 3.287-3.103h18.373c1.816 0 3.288 1.389 3.288 3.103v16.795c0 1.713-1.472 3.102-3.288 3.102zM21 23L20.793 45.214M32.93 30L8.655 30M32.93 37L8.655 37"
                    transform="translate(-726 -297) translate(726 297)"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export const ExelUploadCompleteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="51"
    height="60"
    viewBox="0 0 51 60"
  >
    <defs>
      <path id="xgj1bcyxja" d="M0.645 0.713L12.47 0.713 12.47 12.592 0.645 12.592z" />
      <path id="35jrm1tx3c" d="M0 0L17.598 0 17.598 17.599 0 17.599z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g>
        <g>
          <g>
            <g>
              <g>
                <g>
                  <path
                    fill="#3562FF"
                    d="M42.44 12.463V49.97c0 2.225-1.806 4.029-4.02 4.029H4.02C1.804 54 0 52.196 0 49.97V4.915C0 2.689 1.805.885 4.02.885h26.896L42.44 12.463z"
                    transform="translate(-722 -297) translate(722 297)"
                  />
                  <g transform="translate(-722 -297) translate(722 297) translate(30.099)">
                    <mask id="ucekiqggtb" fill="#fff">
                      <use xlinkHref="#xgj1bcyxja" />
                    </mask>
                    <path
                      fill="#B2CAFF"
                      d="M12.47 12.592H2.818c-1.206 0-2.173-.982-2.173-2.181V.712l11.825 11.88z"
                      mask="url(#ucekiqggtb)"
                    />
                  </g>
                  <path
                    stroke="#FFF"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M30.132 45.253H11.759c-1.816 0-3.287-1.389-3.287-3.102V25.356c0-1.714 1.471-3.103 3.287-3.103h18.373c1.816 0 3.288 1.389 3.288 3.103v16.795c0 1.713-1.472 3.102-3.288 3.102zM21 23L20.793 45.214M32.93 30L8.655 30M32.93 37L8.655 37"
                    transform="translate(-722 -297) translate(722 297)"
                  />
                </g>
              </g>
            </g>
          </g>
          <g transform="translate(-722 -297) translate(722 297) translate(33 42)">
            <mask id="j8egtc9lfd" fill="#fff">
              <use xlinkHref="#35jrm1tx3c" />
            </mask>
            <path
              fill="#B2CAFF"
              d="M17.599 8.799c0 4.86-3.939 8.8-8.8 8.8-4.859 0-8.799-3.94-8.799-8.8C0 3.94 3.94 0 8.799 0c4.861 0 8.8 3.94 8.8 8.799"
              mask="url(#j8egtc9lfd)"
            />
            <path
              stroke="#FFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.401 8.492L7.954 11.044 12.455 6.544"
              mask="url(#j8egtc9lfd)"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
