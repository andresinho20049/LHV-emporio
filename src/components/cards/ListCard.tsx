"use client";

import { useCarrinhoContext } from "@/context/CarrinhoContext";
import { ICart } from "@/interface/IProduto";
import { CurrencyNumber } from "@/utils/CurrencyNumber";
import { Button, Card, TextInput } from "flowbite-react";
import Image from "next/image";
import { ChangeEvent, useCallback } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const ItemCard = (cart: ICart) => {
  const { idPrd, name, description, photo, value } = cart.produto;

  const { changeQtd, removeProduct } = useCarrinhoContext();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      changeQtd(idPrd, parseInt(e.currentTarget.value));
    },
    [changeQtd, idPrd]
  );

  const handleRemoveProduct = useCallback(() => {
    removeProduct(cart.produto);
  }, [cart.produto, removeProduct]);

  return (
    <li className="py-3 sm:py-4">
      <div className="flex space-x-4">
        <div className="flex flex-col md:flex-row w-8/12 md:w-full gap-4">
          <div className="shrink-0">
            <Image
              alt={photo.at(0)?.title || ""}
              height="60"
              src={photo.at(0)?.url || ""}
              width="60"
              className=""
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium text-gray-900 dark:text-white">
              {name}
            </div>
            <div className="truncate text-sm text-gray-500 dark:text-gray-400">
              {description}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-4/12">
          <div className="flex gap-2">
            <TextInput
              type="number"
              name=""
              id={idPrd + ""}
              className="w-sm"
              min={1}
              value={cart.qtd}
              onChange={handleChange}
            />
            <Button size="xs" className="h-6" onClick={handleRemoveProduct}>
              <FaRegTrashAlt />
            </Button>
          </div>
          <div className="text-base font-semibold text-gray-900 dark:text-white">
            {CurrencyNumber.format(value * cart.qtd)}
          </div>
        </div>
      </div>
    </li>
  );
};

interface IListCardProps {
  carrinho: ICart[];
  total: number;
}

export const ListCard = ({ carrinho, total }: IListCardProps) => {
  return (
    <Card>
      <div className="flex flex-col w-full h-full justify-start gap-4">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Carrinho
          </h5>
        </div>
        <div className="flex flex-col">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700 h-96">
            {carrinho.map((cart, idx) => (
              <ItemCard key={idx} produto={cart.produto} qtd={cart.qtd} />
            ))}
            <li>
              <div className="flex justify-between font-semibold py-4">
                <h3>TOTAL: </h3>
                <div className="tracking-widest">
                  {CurrencyNumber.format(total)}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export const ShowCartContext = () => {
  const { carrinho, total } = useCarrinhoContext();

  return <ListCard carrinho={carrinho} total={total} />;
};
