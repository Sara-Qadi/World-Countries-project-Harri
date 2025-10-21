import styles from "./Card.module.css";

interface CardTitleProps {
  children: React.ReactNode;
}

export default function CardTitle({ children }: CardTitleProps) {
  return <h3 className={styles.cardTitle}>{children}</h3>;
}
