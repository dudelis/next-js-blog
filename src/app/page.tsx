import CategoryList from "@/components/CategoryList/CategoryList";
import Featured from "@/components/Featured/Featured";
import Menu from "@/components/Menu/Menu";
import CardList from "@/components/CardList/CardList";
import { Spacer } from "@/components/Spacer/Spacer";
import MenuCategories from "@/components/MenuCategories/MenuCategories";
import { getSortedPostsData } from "@/lib/posts";

export type THomePageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Home(props: THomePageProps) {
  const page = props.searchParams.page ? parseInt(props.searchParams.page as string) : 1;
  return (
    <div>
      <Spacer />
      <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-bold"> 404 - coffee not found.</h1>
      <Featured />
      <Spacer />
      <CategoryList />
      <Spacer />
      <section className="flex gap-5">
        <div className="flex-[3]">
          <CardList page={page} />
        </div>
        <div className="hidden lg:flex flex-[1] flex-col">
          <Menu />
          <Spacer />
          <MenuCategories />
        </div>
      </section>
    </div>
  );
}