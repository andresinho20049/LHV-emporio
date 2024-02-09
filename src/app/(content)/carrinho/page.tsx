import { ShowCartContext } from "@/components/cards/ListCard";
import { ListRecommended } from "@/components/cards/ListReccomended";
import { ResumoPedido } from "@/components/cards/ResumoPedido";
import { Card } from "flowbite-react";

export default function Carrinho() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4">
        <ShowCartContext />
        <ResumoPedido />
      </div>
      <div className="flex flex-col w-full justify-between gap-4">
        <Card color="cyan">
          <div className="mb-4 flex items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Recomendações
            </h5>
          </div>
        </Card>
        <ListRecommended />
      </div>
    </section>
  );
}
