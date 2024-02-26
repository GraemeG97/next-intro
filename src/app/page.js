import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "../../Components/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1> Graeme's app</h1>
      <p>Welcome to the homepage. Hopefully it will look nicer soon</p>
      <Link href="/football-vs-soccer">What is the correct term...</Link>
    </main>
  );
}
