"use client";

import { useCarrinhoContext } from "@/context/CarrinhoContext";
import { IProduto } from "@/interface/IProduto";
import { CurrencyNumber } from "@/utils/CurrencyNumber";
import { Button, Card, Carousel } from "flowbite-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { BsCartCheck, BsCartPlus } from "react-icons/bs";

export const CardEcommerce = (prd: IProduto) => {

  const { carrinho, addProduct, removeProduct } = useCarrinhoContext();

  const cartPlusAction = useCallback(() => {
    addProduct(prd);
    // toggleHasCart((prd) => !prd);
  }, [addProduct, prd]);

  const cartRemoveAction = useCallback(() => {
    removeProduct(prd);
    // toggleHasCart((prd) => !prd);
  }, [removeProduct, prd]);

  const { name, description, value, photo } = prd;

  // const [hasCart, toggleHasCart] = useState<boolean>(false);

  // useEffect(() => {
  //   toggleHasCart(() => {
  //     if (carrinho.filter((p) => p.produto.idPrd == prd.idPrd).length > 0)
  //       return true;

  //     return false;
  //   });
  // }, [carrinho, prd]);

  return (
    <Card className="max-w-sm">
      <div className="cols-span-2 h-48 md:h-96 w-full">
        <Carousel slide={false}>
          {photo.map((photo, idx) => (
            <Image
              key={idx}
              src={photo.url}
              width={500}
              height={760}
              alt={photo.title}
            />
          ))}
        </Carousel>
      </div>
      <h5 className="text-md font-mono font-semibold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <div className="text-sm font-mono tracking-widest text-black dark:text-white">
        {description}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm md:text-2xl font-mono font-bold text-gray-900 dark:text-white">
          {CurrencyNumber.format(value)}
        </span>
        {prd.hasCart ? (
          <Button onClick={cartRemoveAction} color="secondary">
            <BsCartCheck />
          </Button>
        ): (
          <Button onClick={cartPlusAction}>
            <BsCartPlus />
          </Button>
        )}
      </div>
    </Card>
  );
};
