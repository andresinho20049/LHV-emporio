import { IProduto } from "@/interface/IProduto";
import { CurrencyNumber } from "@/utils/CurrencyNumber";
import { Card, Carousel } from "flowbite-react";
import Image from "next/image";
import { BsCartPlus } from "react-icons/bs";

export const CardEcommerce = ({
  name,
  description,
  category,
  value,
  photo,
}: IProduto) => {
  return (
    <Card className="max-w-sm">
      <div className="cols-span-2 h-96 w-full">
        <Carousel slide={false}>
          {photo.map((photo, idx) => (
            <Image key={idx} src={photo.url} width={500} height={760} alt={photo.title} />
          ))}
        </Carousel>
      </div>
      <h5 className="text-md font-mono font-semibold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <p className="text-sm font-mono tracking-widest text-black dark:text-white">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-mono font-bold text-gray-900 dark:text-white">
          {CurrencyNumber.format(value)}
        </span>
        <BsCartPlus />
      </div>
    </Card>
  );
};
