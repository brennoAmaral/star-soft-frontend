import ISvgParams from "./type-svg";

export default function SvgTrash({ customSass }: ISvgParams) {
  return (
    <svg
      width="27"
      height="26"
      viewBox="0 0 27 26"
      className={customSass}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.3744 10.2784C21.3744 10.2784 20.7907 17.5186 20.452 20.5683C20.2908 22.025 19.391 22.8785 17.9172 22.9054C15.1125 22.9559 12.3046 22.9591 9.50102 22.9C8.0831 22.871 7.19837 22.0067 7.04035 20.5759C6.69957 17.4992 6.11907 10.2784 6.11907 10.2784M22.8614 6.80783H4.63159M19.3488 6.8078C18.5049 6.8078 17.7782 6.21118 17.6126 5.3845L17.3514 4.0773C17.1902 3.47423 16.6441 3.05713 16.0216 3.05713H11.4712C10.8487 3.05713 10.3026 3.47423 10.1414 4.0773L9.88017 5.3845C9.71462 6.21118 8.98792 6.8078 8.14405 6.8078"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
