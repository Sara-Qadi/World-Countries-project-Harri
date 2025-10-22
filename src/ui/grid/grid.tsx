import type { ReactNode } from "react";
import styles from "./Grid.module.css";

interface GridProps {
  children: ReactNode;
}

function Grid({ children }: GridProps) {
  if (!children) return <p>No items found.</p>;

  return <div className={styles.layout}>{children}</div>;
}

export default Grid;
