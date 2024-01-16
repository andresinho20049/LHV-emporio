"use client";

import { useCarrinhoContext } from "@/context/CarrinhoContext";
import { IProduto } from "@/interface/IProduto";
import { getProducts } from "@/utils/ListProducts";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BannerAlertComponent } from "../banner/BannerAlert";
import { CardEcommerce } from "./CardEcommerce";

export const ShowProducts = () => {
  const searchParams = useSearchParams();
  const { carrinho } = useCarrinhoContext();
  const category = searchParams.get("category");
  // const products: IProduto[] = getProducts({ category });

  const [products, setProducts] = useState<IProduto[]>([]);

  const cartIds = carrinho.map((prd) => prd.produto.idPrd);

  useEffect(() => {
    setProducts(getProducts({ category }));
  }, [category]);

  if (products.length === 0) {
    return <BannerAlertComponent />;
  }

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
      {products.map((prod, idx) => (
        <CardEcommerce
          key={idx}
          idPrd={prod.idPrd}
          name={prod.name}
          description={prod.description}
          category={prod.category}
          value={prod.value}
          photo={prod.photo}
          hasCart={cartIds.includes(prod.idPrd)}
        />
      ))}
    </div>
  );
};
