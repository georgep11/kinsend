import React from "react";

const SettingSVG = ({ isActive }) => {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "inline-block",
      }}
    >
      <path
        d="M20.7733 38H17.2267C16.0281 38 15.0163 37.1023 14.8738 35.91L14.4954 32.9397C13.7402 32.6943 13.0118 32.3918 12.3199 32.0388L9.95442 33.877C8.99492 34.6196 7.64433 34.5341 6.8115 33.6775L4.31775 31.1838C3.4675 30.3588 3.382 29.0082 4.12458 28.0503L5.96283 25.6833C5.60817 24.9913 5.30575 24.263 5.06192 23.5078L2.08525 23.1293C0.89775 22.9837 0 21.9719 0 20.7733V17.2267C0 16.0281 0.89775 15.0163 2.09 14.8738L5.06033 14.4954C5.30575 13.7402 5.60817 13.0118 5.96125 12.3199L4.12458 9.95442C3.38042 8.99492 3.4675 7.64275 4.32567 6.80992L6.81942 4.31617C7.64433 3.46592 8.9965 3.382 9.95283 4.123L12.3183 5.96283C13.0103 5.60975 13.7386 5.30733 14.4954 5.06192L14.8738 2.08525C15.0163 0.89775 16.0281 0 17.2267 0H20.7733C21.9719 0 22.9837 0.89775 23.1262 2.09L23.5046 5.06033C24.2614 5.30575 24.9897 5.60817 25.6817 5.96125L28.0472 4.123C29.0083 3.38042 30.3573 3.46592 31.1901 4.32408L33.6838 6.81783C34.5341 7.64275 34.6196 8.99333 33.877 9.95125L32.0388 12.3183C32.3934 13.0103 32.6958 13.7386 32.9397 14.4938L35.9163 14.8722C37.1022 15.0163 38 16.0281 38 17.2267V20.7733C38 21.9719 37.1023 22.9837 35.91 23.1262L32.9397 23.5046C32.6943 24.2598 32.3918 24.9882 32.0388 25.6801L33.877 28.0456C34.6212 29.0051 34.5341 30.3557 33.6759 31.1885L31.1822 33.6823C30.3573 34.5325 29.0051 34.6196 28.0488 33.8754L25.6817 32.0372C24.9897 32.3918 24.2614 32.6942 23.5062 32.9381L23.1278 35.9148C22.9837 37.1023 21.9719 38 20.7733 38ZM12.2392 30.305C12.3706 30.305 12.5052 30.3382 12.6255 30.4047C13.4979 30.8924 14.4432 31.2851 15.4343 31.5701C15.7383 31.6572 15.9616 31.9168 16.0012 32.2303L16.4445 35.7137C16.492 36.1111 16.8356 36.4167 17.2267 36.4167H20.7733C21.1644 36.4167 21.508 36.1111 21.5539 35.7216L21.9988 32.2319C22.0384 31.9184 22.2617 31.6588 22.5657 31.5717C23.5568 31.2867 24.5021 30.894 25.3745 30.4063C25.6516 30.2512 25.9968 30.2781 26.2453 30.4728L29.0162 32.6262C29.3344 32.8732 29.7809 32.8526 30.0533 32.5723L32.5628 30.0627C32.8494 29.7841 32.8716 29.3376 32.6246 29.0177L30.4713 26.2469C30.2765 25.9967 30.2496 25.6532 30.4047 25.3761C30.8924 24.5037 31.2851 23.5584 31.5701 22.5673C31.6572 22.2633 31.9168 22.04 32.2303 22.0004L35.7137 21.5571C36.1111 21.508 36.4167 21.1644 36.4167 20.7733V17.2267C36.4167 16.8356 36.1111 16.492 35.7216 16.4461L32.2319 16.0012C31.9184 15.9616 31.6588 15.7383 31.5717 15.4343C31.2867 14.4432 30.894 13.4979 30.4063 12.6255C30.2512 12.3484 30.2765 12.0048 30.4728 11.7547L32.6262 8.98383C32.8748 8.664 32.8526 8.2175 32.5739 7.94833L30.0643 5.43875C29.7873 5.15058 29.3392 5.12842 29.0193 5.377L26.2485 7.53033C25.9967 7.72508 25.6532 7.752 25.3761 7.59683C24.5068 7.10917 23.5616 6.71808 22.5673 6.4315C22.2633 6.34442 22.04 6.08475 22.0004 5.77125L21.5571 2.28792C21.508 1.88892 21.1644 1.58333 20.7733 1.58333H17.2267C16.8356 1.58333 16.492 1.88892 16.4461 2.27842L16.0012 5.76808C15.9616 6.08158 15.7383 6.34125 15.4343 6.42992C14.44 6.71492 13.4948 7.10758 12.6255 7.59367C12.3484 7.75042 12.0048 7.72192 11.7531 7.52875L8.98225 5.37542C8.66242 5.12683 8.2175 5.149 7.94675 5.42767L5.43717 7.93883C5.15058 8.2175 5.12842 8.664 5.37542 8.98383L7.52875 11.7547C7.7235 12.0048 7.75042 12.3484 7.59525 12.6255C7.106 13.4979 6.71492 14.4432 6.42992 15.4343C6.34283 15.7383 6.08317 15.9616 5.76967 16.0012L2.28633 16.4445C1.88892 16.492 1.58333 16.8356 1.58333 17.2267V20.7733C1.58333 21.1644 1.88892 21.508 2.27842 21.5539L5.76808 21.9988C6.08158 22.0384 6.34125 22.2617 6.42833 22.5657C6.71333 23.5568 7.106 24.5021 7.59367 25.3745C7.74883 25.6516 7.7235 25.9952 7.52717 26.2453L5.37383 29.0162C5.12525 29.336 5.14742 29.7825 5.42608 30.0517L7.93567 32.5613C8.21275 32.8478 8.65767 32.87 8.98067 32.623L11.7515 30.4697C11.8956 30.362 12.0666 30.305 12.2392 30.305Z"
        fill="currentColor"
      />
      <path
        d="M18.9999 26.9167C14.6347 26.9167 11.0833 23.3653 11.0833 19C11.0833 14.6348 14.6347 11.0834 18.9999 11.0834C23.3652 11.0834 26.9166 14.6348 26.9166 19C26.9166 23.3653 23.3652 26.9167 18.9999 26.9167ZM18.9999 12.6667C15.5071 12.6667 12.6666 15.5072 12.6666 19C12.6666 22.4929 15.5071 25.3334 18.9999 25.3334C22.4928 25.3334 25.3333 22.4929 25.3333 19C25.3333 15.5072 22.4928 12.6667 18.9999 12.6667Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SettingSVG;
