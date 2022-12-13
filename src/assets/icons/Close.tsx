import { SVGAttributes } from 'react';

interface CloseProps extends SVGAttributes<HTMLOrSVGElement> {}

export default function Close(props: CloseProps) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28 2.82L25.18 0 14 11.18 2.82 0 0 2.82 11.18 14 0 25.18 2.82 28 14 16.82 25.18 28 28 25.18 16.82 14 28 2.82z"
        fill="#2D2D2D"
      />
    </svg>
  );
}

