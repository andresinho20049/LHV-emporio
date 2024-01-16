"use client";

import { useRecommendedProducts } from "@/hooks/useReccomended";
import { CardEcommerce } from "./CardEcommerce";

export const ListRecommended = () => {
  const recommended = useRecommendedProducts();

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
      {recommended.map((prod, idx) => (
        <CardEcommerce
          key={idx}
          idPrd={prod.idPrd}
          name={prod.name}
          description={prod.description}
          category={prod.category}
          value={prod.value}
          photo={prod.photo}
        />
      ))}
    </div>
  );
};
