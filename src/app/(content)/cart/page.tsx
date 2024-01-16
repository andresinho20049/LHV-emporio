"use client";

import { ListCard } from "@/components/cards/ListCard";
import { IPedido } from "@/interface/IProduto";
import { Card } from "flowbite-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CartPage() {
  const searchParams = useSearchParams();
  const b64Encoded = searchParams.get("pedido") || "";

  const content = Buffer.from(b64Encoded, "base64").toString();

  const [pedido, setPedido] = useState<IPedido>({
    name: "Pedido não encontrado",
    carrinho: [],
    total: 0,
    obs: "Favor validar se o link esta correto, não reconhecemos o seu pedido",
  });

  useEffect(() => {
    try {
      setPedido(JSON.parse(content));
    } catch (error) {}
  }, []);

  return (
    <section className="grid grid-flow-row auto-rows-max gap-8">
      <Card className="w-full text-center" imgSrc="/img/BackgroundCart.png">
        <h5 className="font-mono text-3xl font-bold tracking-wider text-gray-900 dark:text-white">
          {pedido.name}
        </h5>
        <p className="font-mono font-normal text-gray-700 dark:text-gray-400">
          {pedido.obs}
        </p>
      </Card>
      <ListCard carrinho={pedido.carrinho} total={pedido.total} />
    </section>
  );
}
