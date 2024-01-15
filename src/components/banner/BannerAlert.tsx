import { HiEye, HiInformationCircle } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import { Alert, Button } from "flowbite-react";

export const  BannerAlertComponent = () => {
  return (
    <Alert
      additionalContent={<AdditionalContent />}
      color="info"
      icon={HiInformationCircle}
    >
      <span className="font-medium">Hummm!</span> Não encontrado resultados
    </Alert>
  );
}

const AdditionalContent = () => {
  return (
    <>
      <div className="mb-4 mt-2 text-sm text-cyan-700 dark:text-cyan-800">
        Pedimos desculpas pelo incomodo, no momento nosso website encontra-se em
        desenvolvimento e não esta disponivel todas as nossas peças, mas peço
        que visite nosso instragram, ficaremos felizes em atende-lo.
      </div>
      <div className="flex">
        <Button
          href="https://www.instagram.com/emporiolhv/"
          target="_blank"
          type="button"
          className="mr-2 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-800 dark:hover:bg-cyan-900"
        >
          <AiFillInstagram className="-ml-0.5 mr-2 h-4 w-4" />
          Visitar
        </Button>
      </div>
    </>
  );
}
