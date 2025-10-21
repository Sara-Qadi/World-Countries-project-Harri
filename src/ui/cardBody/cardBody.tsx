import styles from "./Card.module.css";

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardBody({ children, className = "" }: CardBodyProps) {
  return <div className={`${styles.cardBody} ${className}`}>{children}</div>;
}