"use client";

import { categories } from "@/interface/IProduto";
import { LinksNavigation } from "@/utils/LinksNavigation";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { usePathname, useRouter } from "next/navigation";
import { BsCart } from "react-icons/bs";
import { ModeToggle } from "../iteraction/mode-toggle";

export const HeaderNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Navbar rounded className="bg-primary-200">
      <Navbar.Brand href="/" className="order-2 md:order-1">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white">
          LHV Empório
        </span>
      </Navbar.Brand>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center	order-1 md:order-3">
        <div className="order-none hidden md:flex md:order-first">
          <ModeToggle />
        </div>
        <BsCart className="order-2 md:order-first" />
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="/icons/android-chrome-512x512.png"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">LHV</span>
            <span className="block truncate text-sm font-small">
              <a
                href="https://www.instagram.com/emporiolhv?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                @emporiolhv
              </a>
            </span>
          </Dropdown.Header>
          <Dropdown.Item className="md:order-none md:hidden flex order-first">
            <ModeToggle />
          </Dropdown.Item>
          <Dropdown.Item>Carrinho</Dropdown.Item>
          <Dropdown.Divider />

          {categories.map((category) => (
            <Dropdown.Item
              key={category}
              onClick={() => {
                router.push(`/loja?category=${category}`);
              }}
            >
              {category}
            </Dropdown.Item>
          ))}

          <Dropdown.Divider />
          <Dropdown.Item>Contato</Dropdown.Item>
        </Dropdown>
      </div>
      <Navbar.Toggle className="order-3" />
      <Navbar.Collapse className="order-3 md:order-2">
        {LinksNavigation.map((item) => (
          <Navbar.Link
            key={item.href}
            onClick={() => {
              router.push(item.href);
            }}
            className="cursor-pointer"
            active={item.href === pathname}
          >
            {item.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
