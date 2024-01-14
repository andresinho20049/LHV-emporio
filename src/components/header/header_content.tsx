"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AvatarDropMenu } from "../avatar/avatar_dropmenu";
import { ModeToggle } from "../iteraction/mode-toggle";
import { NavigationPages } from "../structure/navigation";

export const HeaderContent = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const pathname = usePathname();

  return (
    <header ref={ref}>
      <div
        className={`sticky top-0 z-50 bg-neutral-700 backdrop-blur overscroll-y-none duration-200 border-b  ${
          isIntersecting
            ? "bg-zinc-900/500  border-zinc-800 "
            : "bg-zinc-900/0 border-transparent bg-transparent"
        }`}
      >
        <div className="container flex flex-row items-center justify-between p-6 mx-auto">
          <AvatarDropMenu />

          <NavigationPages currentPage={pathname} />

          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
