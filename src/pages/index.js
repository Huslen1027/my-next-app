import { Button, Mytext, Card } from "@/components";
import styles from "@/styles/pages/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>fuck that shit</h1>
      <Button />
      <Mytext />
      <Card text="card text" />
    </div>
  );
}
