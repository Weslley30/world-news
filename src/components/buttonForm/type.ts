export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  type?: "button" | "submit";
  className?: string;
};
