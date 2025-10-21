import styles from "./Card.module.css";

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function CardImage({ src, alt, className = "" }: CardImageProps) {
  return <img src={src} alt={alt} className={`${styles.cardImage} ${className}`} />;
}