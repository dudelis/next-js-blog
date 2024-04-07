import CategoryList from "@/components/CategoryList/CategoryList";
import Featured from "@/components/Featured/Featured";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Link from "next/link";
import styles from './homepage.module.css';
import CardList from "@/components/CardList/CardList";

export default function Home() {
  return <div>
    <Featured />
    <CategoryList />
    <div className={styles.container}>
      <CardList />
      <Menu />
    </div>
  </div>;
}
