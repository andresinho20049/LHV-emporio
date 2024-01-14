import { LinksNavigation } from "@/utils/LinksNavigation";
import Link from "next/link";

interface INavigationPagesProps {
  currentPage: string;
}

export const NavigationPages = ({ currentPage }: INavigationPagesProps) => {
  return (
    <ul className="flex items-center justify-center gap-10">
      {LinksNavigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm duration-500 ${
            item.href === currentPage
              ? "text-primary-500"
              : "text-secondary-500"
          } hover:text-secondary-100`}
        >
          {item.name}
        </Link>
      ))}
    </ul>
  );
};
