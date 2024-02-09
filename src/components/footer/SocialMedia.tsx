import { FooterIcon, Tooltip } from "flowbite-react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export const SocialMediaComponent = () => {
  return (
    <div className="flex space-x-6 sm:mt-0 sm:justify-left">
      <FooterIcon
        href="https://www.instagram.com/emporiolhv?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        rel="noopener noreferrer"
        icon={BsInstagram}
        ariaLabel="Instagram"
      />
      <FooterIcon
        href="https://api.whatsapp.com/send?phone=5511996910147"
        target="_blank"
        rel="noopener noreferrer"
        icon={BsWhatsapp}
        ariaLabel="Whatsapp"
      />
    </div>
  );
};
