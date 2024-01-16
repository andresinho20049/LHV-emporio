'use client'

import { categories } from "@/interface/IProduto";
import { Button, ButtonGroup } from "flowbite-react";
import { useRouter } from "next/navigation";

export const CategoryGroup = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center my-6 ">
      <ButtonGroup
        className="grid md:grid-flow-col grid-cols-3 md:auto-cols-max"
        outline
      >
        {categories.map((category, idx) => (
          <Button
            key={idx}
            color="gray"
            className="rounded-lg m-2 md:m-0 md:rounded-none"
            onClick={() => {
              router.push(`/loja?category=${category}`, {scroll:false})
             }}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};
