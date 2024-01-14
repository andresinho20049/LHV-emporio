"use client";

import { Dropdown } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";
import Image from 'next/image';

export const AvatarDropMenu = () => {

    const avatar = (
      <Image
        className="rounded-full"
        src="/android-chrome-192x192.png"
        width={50}
        height={50}
        alt="Picture of the author"
      />
    );

  return (
    <Dropdown
      label={avatar}
      className="bg-gradient-to-r from-neutral-500/100 to-neutral-800/100"
    >
      <Dropdown.Header>
        <span className="block text-sm">André Carlos</span>
        <span className="block truncate text-sm font-medium text-gray-400">
          andre.andresinho2009@hotmail.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
      <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
      <Dropdown.Item icon={HiCurrencyDollar}>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
