import React from "react";

const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="260"
      height="259"
      viewBox="0 0 260 259"
      fill="none"
    >
      <g filter="url(#filter0_d_2_5150)">
        <circle cx="129.991" cy="125.281" r="55.265" fill="white" />
      </g>
      <path
        d="M148.135 144.925C148.963 144.925 149.635 144.253 149.635 143.425L149.635 129.925C149.635 129.096 148.963 128.425 148.135 128.425C147.306 128.425 146.635 129.096 146.635 129.925L146.635 141.925L134.635 141.925C133.806 141.925 133.135 142.596 133.135 143.425C133.135 144.253 133.806 144.925 134.635 144.925L148.135 144.925ZM110.786 108.197L147.074 144.485L149.195 142.364L112.907 106.076L110.786 108.197Z"
        fill="#FF5241"
      />
      <defs>
        <filter
          id="filter0_d_2_5150"
          x="0.825584"
          y="0.115623"
          width="258.33"
          height="258.33"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="36.95" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_5150"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2_5150"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Arrow;
