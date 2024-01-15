'use client'

import { categories } from "@/interface/IProduto";
import { Button, ButtonGroup } from "flowbite-react";
import Link from "next/link";
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
    <ButtonGroup>
      {categories.map((category, idx) => (
        <Button
          key={idx}
          color="gray"
          onClick={() => {
            // <pathname>?sort=asc
            router.push(pathname + "?" + createQueryString("category", category), {
                scroll: false
            });
          }}
        >
          {category}
        </Button>
      ))}
    </ButtonGroup>
  );
};
