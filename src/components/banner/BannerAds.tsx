import { Banner, BannerCollapseButton } from "flowbite-react";
import { title } from "process";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";

export interface IBannerAdsProps {
    text: string;
    link_text: string;
    link_url: string;
}

export const BannerAds = ({
    text,
    link_text,
    link_url
}: IBannerAdsProps) => {
  return (
    <Banner>
      <div className="flex w-full justify-between border-b border-neutral-200 bg-neutral-100 my-4 p-4 dark:border-neutral-600 dark:bg-neutral-700">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <MdAnnouncement className="mr-4 h-4 w-4" />
            <span className="[&_p]:inline">
              {text} &nbsp;
              <a
                href={link_url}
                target="_blank"
                className="decoration-600 dark:decoration-500 inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-300"
              >
                {link_text}
              </a>
            </span>
          </p>
        </div>
        <BannerCollapseButton
          color="gray"
          className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
        >
          <HiX className="h-4 w-4" />
        </BannerCollapseButton>
      </div>
    </Banner>
  );
}
