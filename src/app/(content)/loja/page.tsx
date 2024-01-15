import { ShowProducts } from "@/components/cards/ShowProducts";
import { CarouselComponent } from "@/components/carousel/CarouselComponent";
import { CategoryGroup } from "@/components/iteraction/CategoryGroup";

export default function Loja() {
  const imgs = [
    "lhv_wallpaper_1.png",
    "lhv_wallpaper_2.png",
    "lhv_wallpaper.png",
  ];

  return (
    <section>
      <CarouselComponent imgs={imgs} />

      <div className="grid justify-items-center my-4 md:my-6">
        <CategoryGroup />
      </div>

      <ShowProducts />
    </section>
  );
}
