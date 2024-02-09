"use client";

import { useCarrinhoContext } from "@/context/CarrinhoContext";
import { IPedido } from "@/interface/IProduto";
import { CurrencyNumber } from "@/utils/CurrencyNumber";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button, Card, Label, TextInput } from "flowbite-react";
import { ReactElement, useCallback, useMemo, useState } from "react";
import { InvoiceDocument } from "../report/invoice";
import { ListCard } from "./ListCard";

export const ResumoPedido = () => {
  const copied = "Pedido Gerado";
  const notCopied = "Gerar pedido";

  const baseURL = process.env.HOST || "http://localhost:3000";

  const [ hasPedido, setHasPedido ] = useState(false);
  const { carrinho, total } = useCarrinhoContext();
  const [state, setState] = useState(notCopied);

  const [pedido, setPedido] = useState<IPedido>({
    name: "",
    obs: "",
    carrinho: carrinho,
    total: total,
  });

  const [invoice, setInvoice] = useState<ReactElement | null>(null);

  useMemo(() => {
    setHasPedido(() => pedido.name.length > 3 && pedido.carrinho.length > 0)
  }, [pedido]);

  const changeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPedido((p) => {
      return { ...p, name: e.target.value };
    });
  }, []);

  const changeObs = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPedido((p) => {
      return { ...p, obs: e.target.value };
    });
  }, []);

  useMemo(() => {
    setPedido((p) => {
      return { ...p, carrinho: carrinho, total: total };
    });
  }, [carrinho, total]);

  const handleClick = useCallback(() => {
    const pedidoJson = JSON.stringify(pedido);
    const paramPedido = Buffer.from(pedidoJson).toString("base64");
    // const date = new Date();
    // const timeMillis = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`

    // const htmlInvoice = templateInvoice(pedido);
    // generatePDF(htmlInvoice, `Pedido-${timeMillis}.pdf`);

    setInvoice(
      <InvoiceDocument
        name={pedido.name}
        obs={pedido.obs}
        carrinho={pedido.carrinho}
        total={pedido.total}
      />
    );

    const url = `${baseURL}/cart?pedido=${paramPedido}`.replaceAll(" ", "");
    // GenerateInvoice(htmlInvoice, `Invoice-${timeMillis}.pdf`);
    navigator.clipboard
      .writeText(url)
      .then(() => setState(copied))
      .catch(() => setState("Não permitido!"))
      .finally(() => {
        setTimeout(() => {
          setState(notCopied);
        }, 2000);
      });
  }, [pedido]);

  return (
    <Card className="w-full" imgSrc="/Logo.png">
      {/* <Image
          alt="LHV"
          src="/img/BackgroundCart.png" 
          width={1080}
          height={1920}
        /> */}
      <div className="grid grid-flow-row auto-rows-max gap-8 text-justify whitespace-pre-line font-normal text-gray-700 dark:text-gray-400 gap-4">
        <div>
          Ficamos muito felizes em atende-lo, estamos trabalhando para aumentar
          as formas de pagamento aceitas pelo portal.
        </div>
        <div>
          No momento para sua comodidade, click no botão abaixo, será gerado seu
          pedido.
        </div>
      </div>

      <div>
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="nameClient" value="Nome" />
            </div>
            <TextInput
              id="nameClient"
              type="text"
              placeholder="Digite seu nome"
              required
              value={pedido.name}
              onChange={changeName}
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="obsClient" value="Observação" />
            </div>
            <TextInput
              id="obsClient"
              type="text"
              value={pedido.obs}
              onChange={changeObs}
              shadow
            />
          </div>

          <Button
            onClick={handleClick}
            color={state === notCopied ? "cyan" : "green"}
            disabled={!hasPedido}
          >
            {state}
          </Button>
          {invoice && (
            <PDFDownloadLink
              document={invoice}
              fileName={`Invoice-${pedido.name}.pdf`}
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download now!"
              }
            </PDFDownloadLink>
          )}
        </form>
      </div>
    </Card>
  );
};

const templateInvoiceTsx = (pedido: IPedido) => {
  return (
    <section className="grid grid-flow-row auto-rows-max gap-8">
      <Card className="w-full text-center" imgSrc="/img/BackgroundCart.png">
        <h5 className="font-mono text-3xl font-bold tracking-wider text-gray-900 dark:text-white">
          {pedido.name}
        </h5>
        <p className="font-mono font-normal text-gray-700 dark:text-gray-400">
          {pedido.obs}
        </p>
      </Card>
      <ListCard carrinho={pedido.carrinho} total={pedido.total} />
    </section>
  );
};

const templateInvoice = (pedido: IPedido) => {
  const date = new Date();
  const { name, carrinho, total, obs } = pedido;

  `<!DOCTYPE html>
    <html lang="pt-BR">
    <head>
    <style>
        .invoice-box {
            max-width: 800px;
            margin: auto;
            padding: 30px;
            border: 1px solid #eee;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
            font-size: 16px;
            line-height: 24px;
            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
            color: #555;
        }

        .invoice-box table {
            width: 100%;
            line-height: inherit;
            text-align: left;
        }

        .invoice-box table td {
            padding: 5px;
            vertical-align: top;
        }

        .invoice-box table tr td:nth-child(2) {
            text-align: right;
        }

        .invoice-box table tr.top table td {
            padding-bottom: 20px;
        }

        .invoice-box table tr.top table td.title {
            font-size: 45px;
            line-height: 45px;
            color: #333;
        }

        .invoice-box table tr.information table td {
            padding-bottom: 40px;
        }

        .invoice-box table tr.heading td {
            background: #eee;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
        }

        .invoice-box table tr.details td {
            padding-bottom: 20px;
        }

        .invoice-box table tr.item td {
            border-bottom: 1px solid #eee;
        }

        .invoice-box table tr.total td:nth-child(2) {
            border-bottom: 2px solid #eee;
            font-weight: bold;
        }

        @media only screen and (max-width: 600px) {
            .invoice-box table tr.top table td {
                width: 100%;
                display: block;
                text-align: center;
            }

            .invoice-box table tr.information table td {
                width: 100%;
                display: block;
                text-align: center;
            }
        }

        /** RTL **/
        .invoice-box.rtl {
            direction: rtl;
            font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
        }

        .invoice-box.rtl table {
            text-align: right;
        }

        .invoice-box.rtl table tr td:nth-child(2) {
            text-align: left;
        }
    </style>
    </head>

    <body>
        <div class="invoice-box">
            <table cellpadding="0" cellspacing="0">
                <tr class="top">
                    <td colspan="2">
                        <table>
                            <tr>
                                <td class="title">
                                    <img src="https://github.com/andresinho20049/LHV-emporio/blob/pdf/public/Logo.png?raw=true"
                                        style="width: 100%; max-width: 300px" />
                                </td>

                                <td>
                                    Invoice #: ${date.getMilliseconds()}<br />
                                    Data: ${date.getDay()} de ${date.getMonth()} de ${date.getFullYear()}<br />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr class="information">
                    <td colspan="2">
                        <table>
                            <tr>
                                <td>Rua Santa Maria n° 193 <br />
                                    Jd. Santo Antônio | Embu <br />
                                    São Paulo
                                </td>

                                <td>
                                    Empório LHV.<br />
                                    @emporiolhv <br />
                                    +55 (11) 99691-0147
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td>${name}</td>
                </tr>

                <tr class="heading">
                    <td>Observação</td>

                    <td></td>
                </tr>

                <tr class="details">
                    <td>${obs}</td>

                    <td></td>
                </tr>

                <tr class="heading">
                    <td>Item</td>

                    <td>Preço</td>
                </tr>

                ${carrinho.map(
                  (item) =>
                    `<tr class="item">
                    <td>${item.qtd} - ${item.produto.name}</td>

                    <td>${CurrencyNumber.format(
                      item.produto.value * item.qtd
                    )}</td>
                  </tr>`
                )}

                <tr class="total">
                    <td></td>

                    <td>Total: ${CurrencyNumber.format(total)}</td>
                </tr>
            </table>
        </div>
    </body>

    </html>
    `;
};
