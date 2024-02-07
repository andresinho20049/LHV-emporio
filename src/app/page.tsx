import Image from "next/image";
import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEnter } from "react-icons/io5";

export default function Home() {
  return (
    <div>
      <div className="flex h-screen items-center justify-center bg-gray-900 p-5">
        <div className="flex flex-col md:flex-row items-center gap-10 md:px-10">
          <div className="md:order-first order-last">
            <h1 className="mb-2 text-3xl lg:text-5xl font-bold text-white animate-title">
              Empório <span className="text-primary-700">LHV</span>
            </h1>
            <div className="h-2 w-24 bg-primary-700 animate-title" />
            <p className="my-6 text-white animate-fade-in">
              Outfit valioso é na LHV Empório, estamos sempre atualizando e aqui
              você pode nos acompanhar, seguir as melhores tendencias e adquirir
              seu look.
            </p>
            <div className="flex justify-center space-x-5">
              <Link
                href={
                  "https://www.instagram.com/emporiolhv?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                }
                className="flex w-full items-center justify-center gap-1 rounded-2xl border-2 border-secondary-700 p-5 py-3 font-semibold text-white hover:bg-secondary-700"
              >
                Follow us
                <IoMdHeartEmpty />
              </Link>
              <Link
                href={"/loja"}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-500 hover:bg-primary-700 p-5 py-3 font-semibold"
              >
                Continue
                <IoEnter />
              </Link>
            </div>
          </div>
          <div className="order-first md:order-last flex h-48 md:h-full w-full md:w-6/12 justify-center items-center">
            <Image
              src="/Logo_t.png"
              alt=""
              className="object-cover h-[12rem] w-[12rem] lg:h-[36rem] lg:w-[36rem] bg-white hover:bg-white/70 hover:animate-pulse rounded-full"
              width={840}
              height={595}
            />
          </div>
        </div>
      </div>
    </div>
  );
}