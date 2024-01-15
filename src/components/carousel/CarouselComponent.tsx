import { Carousel } from "flowbite-react";
import Image from "next/image";

interface ICarouselComponentProps {
    imgs: string[]
}

export const  CarouselComponent = ({
    imgs
}:ICarouselComponentProps) => {
  return (
    <div className="h-48 md:h-screen w-full">
      <Carousel pauseOnHover >
        {imgs.map((img, idx) => {
          return <Image key={`img_${idx}`} src={`/img/${img}`} width={1920} height={1080} alt="..." />;
        })}
      </Carousel>
    </div>
  );
}
