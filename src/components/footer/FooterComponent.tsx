import {
  Avatar,
  Footer,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { FooterCopyWriter } from "./Copywriting";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { SocialMediaComponent } from "./SocialMedia";

export const FooterComponent = () => {
  return (
    <Footer container className="bg-primary-200">
      <div className="w-full text-left container mx-auto">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Avatar
            className="sm:flex hidden"
            alt="LHV"
            img="/icons/android-chrome-512x512.png"
            size="lg"
            rounded
          />
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
            <div>
              <FooterTitle title="Sobre" />
              <FooterLinkGroup col>
                <FooterLink href="/sobre">LHV Empório</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Nos segue" />
              <FooterLinkGroup col>
                <SocialMediaComponent />
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Compliance" />
              <FooterLinkGroup col>
                <FooterLink href="#">Politicas de privacidade</FooterLink>
                <FooterLink href="#">Termos &amp; Condições</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <FooterCopyWriter />
      </div>
    </Footer>
  );
};
