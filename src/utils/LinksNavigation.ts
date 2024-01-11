export const LinksNavigation:ILinkNav[] = [
	{ name: "Articles", href: "/articles" },
	{ name: "Colaboratory", href: "/colaboratory" },
	// { name: "Contact", href: "/contact" },
	{ name: "About", href: "/about" },
  ];
  
  interface ILinkNav {
	name: string;
	href: string;
  }