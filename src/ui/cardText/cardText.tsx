import styles from "./Card.module.css";

interface CardTextProps {
  children: React.ReactNode;
}

export default function CardText({ children }: CardTextProps) {
  return <p className={styles.cardText}>{children}</p>;
}