import { Card } from "flowbite-react";
import { BsCartPlus } from "react-icons/bs";

interface ICardEcommerceProps {
  img: string;
  title: string;
  valor: number;
}

export const CardEcommerce = ({
    img,
    title,
    valor
}: ICardEcommerceProps) => {

    let USDollar = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <Card
      className="max-w-sm"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={`/img/${img}`}
    >
      <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          {USDollar.format(valor)}
        </span>
        <BsCartPlus />
      </div>
    </Card>
  );
};
