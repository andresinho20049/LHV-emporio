import { Carousel } from "flowbite-react";

interface ICarouselComponentProps {
    imgs: string[]
}

export const  CarouselComponent = ({
    imgs
}:ICarouselComponentProps) => {
  return (
    <div className="h-96 md:h-screen">
      <Carousel pauseOnHover >
        {imgs.map((img, idx) => {
          return <img key={`img_${idx}`} src={`/img/${img}`} alt="..." />;
        })}
      </Carousel>
    </div>
  );
}
