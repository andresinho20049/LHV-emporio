'use client'

import { useCarrinhoContext } from "@/context/CarrinhoContext";
import { IProduto } from "@/interface/IProduto";
import { getProducts } from "@/utils/ListProducts";
import { useEffect, useState } from "react";

export const useRecommendedProducts = () => {
  const { carrinho } = useCarrinhoContext();
  const [recommended, setRecommended] = useState<IProduto[]>([]);

  const productsId = carrinho.map((cart) => cart.produto.idPrd);

  useEffect(() => {
    setRecommended(() =>
      getProducts({ category: null })
        .filter((prd) => {
          if (productsId.includes(prd.idPrd)) return false;

          if (carrinho.map(c => c.produto.category).includes(prd.category)) return true;

          if (prd.value <= 100) return true;

          return false;
        })
        .slice(0, 4)
    );
  }, [carrinho]);

  return recommended;
};
