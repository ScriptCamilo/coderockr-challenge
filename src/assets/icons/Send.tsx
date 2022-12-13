import { SVGAttributes } from 'react';

interface SendProps extends SVGAttributes<HTMLOrSVGElement> {}

export default function Send(props: SendProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" fill="#fff" />
    </svg>
  );
}
