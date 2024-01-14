import { BannerAds, IBannerAdsProps } from "@/components/banner/BannerAds";
import { FooterComponent } from "@/components/footer/FooterComponent";
import { AdsenseComponent } from "@/components/google/AdsenseComponent";
import { HeaderNav } from "@/components/header/header_nav";
import { ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

export default function LayoutArticle({ children }: ILayoutProps) {

  const magaluAds: IBannerAdsProps = {
    text: "Promoções de Beleza & Perfumaria é no ",
    link_text: "Magalu",
    link_url:
      "https://www.magazinevoce.com.br/magazineandresinho20049/beleza-and-perfumaria/l/pf/",
  };

  const shopeeAds: IBannerAdsProps = {
    text: "As melhores ofertas em produtos de beleza ",
    link_text: "você encontra na Shopee!",
    link_url: "https://shope.ee/6KfMnNJy9k",
  };

  let randomNumber = Math.floor(Math.random() * 100);
  const isMagalu:boolean = randomNumber % 2 == 0 ? true : false;

  const showAds = isMagalu ? magaluAds : shopeeAds;

  return (
    <section className="grid grid-flow-row justify-stretch h-screen ">
      <header className="flex-none">
        <HeaderNav />
        <BannerAds text={showAds.text} link_text={showAds.link_text} link_url={showAds.link_url} />
      </header>
      <main className="shrink-0 h-dvh h-full md:container justify-items-center md:mx-auto md:px-2 px-4 py-4">
        {children}
      </main>
      <AdsenseComponent />
      <footer className="flex-none mt-auto">
        <FooterComponent />
      </footer>
    </section>
  );
}
