import { SVGAttributes } from 'react';

interface ReadMoreProps extends SVGAttributes<HTMLOrSVGElement> {}

export default function ReadMore(props: ReadMoreProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.024 8h6.015L24 16l-7.961 8h-6.015l7.961-8-7.961-8zM0 24h6.015l7.961-8-7.961-8H0l7.961 8L0 24z"
        fill="#032937"
      />
    </svg>
  );
}
