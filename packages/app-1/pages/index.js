import styles from "../styles/Home.module.css";
import OpenApp2 from "app-2/components/OpenApp2";
import { SharedButton } from "shared/src/components/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to App 1</h1>
      <OpenApp2 />
      <SharedButton />
    </div>
  );
}
