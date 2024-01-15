'use client'

import { categories } from "@/interface/IProduto";
import { Button, ButtonGroup } from "flowbite-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const CategoryGroup = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

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
              // <pathname>?sort=asc
              router.push(
                pathname + "?" + createQueryString("category", category),
                {
                  scroll: false,
                }
              );
            }}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};
