import React from 'react';

const icons: {
  [key: string]: {
    code: (props: {
      width: number;
      height: number;
      color: string;
    }) => JSX.Element;
  };
} = {
  menu: {
    code: ({ width, height, color }) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3_4483)">
          <path
            d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM4 20H8V16H4V20ZM4 14H8V10H4V14ZM10 14H14V10H10V14ZM16 4V8H20V4H16ZM10 8H14V4H10V8ZM16 14H20V10H16V14ZM16 20H20V16H16V20Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_3_4483">
            <rect width={width} height={height} fill={color} />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  arrowBack: {
    code: ({ width, height, color }) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3_4484)">
          <path
            d="M10 9V5L3 12L10 19V14.9C15 14.9 18.5 16.5 21 20C20 15 17 10 10 9Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_3_4484">
            <rect width={width} height={height} fill={color} />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  arrowUp: {
    code: ({ width, height, color }) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_7_195)">
          <path
            d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_7_195">
            <rect width="24" height="24" fill={color} />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  asideMenu: {
    code: ({ width, height, color }) => (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_48880_181)">
          <path
            d="M2.75 11.9167H10.0833V2.75H2.75V11.9167ZM2.75 19.25H10.0833V13.75H2.75V19.25ZM11.9167 19.25H19.25V10.0833H11.9167V19.25ZM11.9167 2.75V8.25H19.25V2.75H11.9167Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_48880_181">
            <rect width={width} height={height} fill={color} />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  paper: {
    code: ({ width, height, color }) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5556 4H5.77778C4.8 4 4 4.8 4 5.77778V18.2222C4 19.2 4.8 20 5.77778 20H18.2222C19.2 20 20 19.2 20 18.2222V8.44444L15.5556 4ZM7.55556 7.55556H12V9.33333H7.55556V7.55556ZM16.4444 16.4444H7.55556V14.6667H16.4444V16.4444ZM16.4444 12.8889H7.55556V11.1111H16.4444V12.8889ZM14.6667 9.33333V5.77778L18.2222 9.33333H14.6667Z"
          fill={color}
        />
      </svg>
    ),
  },
  checkmark: {
    code: ({ width, height, color }) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.1253 8.35758C26.6181 8.84097 26.6258 9.63239 26.1424 10.1253L13.3924 23.1253C13.1588 23.3634 12.8397 23.4984 12.5061 23.5C12.1724 23.5016 11.852 23.3698 11.6161 23.1339L5.36612 16.8839C4.87796 16.3957 4.87796 15.6043 5.36612 15.1161C5.85427 14.628 6.64573 14.628 7.13388 15.1161L12.4914 20.4736L24.3576 8.37474C24.841 7.88187 25.6324 7.87418 26.1253 8.35758Z"
          fill={color}
        />
      </svg>
    ),
  },
};

export default icons;
