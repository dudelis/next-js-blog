import CategoryList from "@/components/CategoryList/CategoryList";
import Featured from "@/components/Featured/Featured";
import Menu from "@/components/Menu/Menu";
import styles from './homepage.module.css';
import CardList from "@/components/CardList/CardList";
import { Spacer } from "@/components/Spacer/Spacer";
import MenuCategories from "@/components/MenuCategories/MenuCategories";

export type THomePageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Home(props: THomePageProps) {
  const page = props.searchParams.page ? parseInt(props.searchParams.page as string) : 1;
  return (
    <div>
      <Featured />
      <CategoryList />
      <Spacer />
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <CardList page={page} />
        </div>
        <div className={styles.rightContainer}>
          <Menu />
          <Spacer />
          <MenuCategories />
        </div>
      </div>
    </div>
  );
}
