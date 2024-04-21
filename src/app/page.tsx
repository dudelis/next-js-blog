import CategoryList from "@/components/CategoryList/CategoryList";
import Featured from "@/components/Featured/Featured";
import Menu from "@/components/Menu/Menu";
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
      <h1 className="text-6xl text-center"> 404 - coffee not found.</h1>
      <Featured />
      <CategoryList />
      <Spacer />
      <div className="flex gap-5">
        <div className="flex-[3]">
          <CardList page={page} />
        </div>
        <div className="hidden lg:flex flex-[1] flex-col">
          <Menu />
          <Spacer />
          <MenuCategories />
        </div>
      </div>
    </div>
  );
}
