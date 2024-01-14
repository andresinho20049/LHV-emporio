import { CardEcommerce } from "@/components/cards/CardEcommerce";
import { CarouselComponent } from "@/components/carousel/CarouselComponent";
import { AdsenseComponentImageOnly } from "@/components/google/AdsenseComponent";

export default function Loja() {
  const imgs = [
    "lhv_wallpaper_1.png",
    "lhv_wallpaper_2.png",
    "lhv_wallpaper.png",
  ];

  return (
    <>
      <CarouselComponent imgs={imgs} />

      <AdsenseComponentImageOnly />

    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">

      {[1, 2].map((value) => (
          <CardEcommerce 
          key={value} 
          img="tenis_2.png"
          title="Tênis Nike Shox"
          valor={500.50}
          />
          ))}
          </div>
    </>
  );
}
