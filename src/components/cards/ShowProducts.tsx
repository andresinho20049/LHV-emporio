'use client'

import { IProduto } from "@/interface/IProduto";
import { getProducts } from "@/utils/ListProducts";
import { useSearchParams } from "next/navigation";
import { CardEcommerce } from "./CardEcommerce";
import { BannerAlertComponent } from "../banner/BannerAlert";

export const ShowProducts = () => {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const products: IProduto[] = getProducts({ category });

  if (products.length === 0) {
    return (
        <BannerAlertComponent />
    )
  }

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
      {products.map((prod, idx) => (
        <CardEcommerce
          key={idx}
          name={prod.name}
          description={prod.description}
          category={prod.category}
          value={prod.value}
          photo={prod.photo}
        />
      ))}
    </div>
  );
};
