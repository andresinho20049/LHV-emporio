"use client";

import { useCarrinhoContext } from "@/context/CarrinhoContext";
import { IPedido } from "@/interface/IProduto";
import { Button, Card, Label, TextInput } from "flowbite-react";
import Image from "next/image";
import {
  ChangeEvent,
  ChangeEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";

export const ResumoPedido = () => {
  const copied = "Link copiado";
  const notCopied = "Copiar Link";

  const { carrinho, total } = useCarrinhoContext();
  const [state, setState] = useState(notCopied);

  const [pedido, setPedido] = useState<IPedido>({
    name: "",
    obs: "",
    carrinho: carrinho,
    total: total,
  });

  const changeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPedido((p) => {
      return { ...p, name: e.target.value };
    });
  }, []);

  const changeObs = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPedido((p) => {
      return { ...p, obs: e.target.value };
    });
  }, []);

  useMemo(() => {
    setPedido((p) => {
      return { ...p, carrinho: carrinho, total: total };
    });
  }, [carrinho, total]);

  const handleClick = useCallback(() => {
    const pedidoJson = JSON.stringify(pedido);
    const paramPedido = Buffer.from(pedidoJson).toString("base64");

    navigator.clipboard
      .writeText(`https://emporiolhv.vercel.app/cart?pedido=${paramPedido}`)
      .then(() => setState(copied))
      .catch(() => setState("Não permitido!"))
      .finally(() => {
        setTimeout(() => {
          setState(notCopied);
        }, 2000);
      });
  }, [pedido]);

  return (
    <>
      <Card className="w-full " imgSrc="/img/BackgroundCart.png">
        {/* <Image
          alt="LHV"
          src="/img/BackgroundCart.png"
          width={1080}
          height={1920}
        /> */}
        <div className="grid grid-flow-row auto-rows-max gap-8 text-justify whitespace-pre-line font-normal text-gray-700 dark:text-gray-400 gap-4">
          <div>
            Ficamos muito felizes em atende-lo, estamos trabalhando para
            aumentar as formas de pagamento aceitas pelo portal.
          </div>
          <div>
            No momento para sua comodidade, click no botão abaixo, será gerado
            um link compartilhavel com os itens adicionados em seu carrinho.
          </div>
          <div>
            você pode entrar em contato conosco pelo numero
            <strong> +55 11 99691-0147 </strong>
            para receber suporte do nosso time, fique avontade para compartilhar
            o link do seu carrinho, nós iremos fazer a validação em conjunto
            contigo e fornecer todo suporte necessário para sua compra.
          </div>
        </div>

        <div>
          <form className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="nameClient" value="Nome" />
              </div>
              <TextInput
                id="nameClient"
                type="text"
                placeholder="Digite seu nome"
                required
                value={pedido.name}
                onChange={changeName}
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="obsClient" value="Observação" />
              </div>
              <TextInput
                id="obsClient"
                type="text"
                value={pedido.obs}
                onChange={changeObs}
                shadow
              />
            </div>

            <Button
              onClick={handleClick}
              color={state === notCopied ? "cyan" : "green"}
            >
              {state}
            </Button>
          </form>
        </div>
      </Card>
    </>
  );
};
