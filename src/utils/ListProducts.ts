import { IProduto } from "@/interface/IProduto";


const products: IProduto[] = [
  {
    idPrd: 1,
    name: "Kenner Infantil",
    description: "Tam - 25/26 ao 37/38",
    category: "Chinelo",
    value: 60,
    photo: [
      {
        title: "Preto/Vermelho",
        url: "/img/tenis_7.png",
        cor: "Vermelho",
      },
      {
        title: "Preto/Amarelo",
        url: "/img/tenis_8.png",
        cor: "Amarelo",
      },
      {
        title: "Preto",
        url: "/img/tenis_9.png",
        cor: "Preto",
      },
    ],
  },
  {
    idPrd: 2,
    name: "Nike Air Max",
    description: "Air Max linha tenis feminino",
    category: "Tenis",
    value: 450.5,
    photo: [
      {
        title: "Air Max feminino branco",
        url: "/img/tenis_1.png",
        cor: "Branco",
      },
    ],
  },
  {
    idPrd: 3,
    name: "Air Max TN plus",
    description: "TAM - 38 ao 43",
    category: "Tenis",
    value: 470,
    photo: [
      {
        title: "Air Max  branco",
        url: "/img/tenis_10.png",
        cor: "Branco",
      },
      {
        title: "Air Max branco/verde",
        url: "/img/tenis_11.png",
        cor: "Verde",
      },
      {
        title: "Air Max Preto",
        url: "/img/tenis_12.png",
        cor: "Preto",
      },
    ],
  },
  {
    idPrd: 4,
    name: "Air Max TN plus 3.0",
    description: "TAM - 38 ao 43",
    category: "Tenis",
    value: 470,
    photo: [
      {
        title: "Air Max 3.0",
        url: "/img/tenis_2.png",
        cor: "Preto",
      },
      {
        title: "Air Max 3.0",
        url: "/img/tenis_5.png",
        cor: "Preto",
      },
      {
        title: "Air Max 3.0 Branco/Azul",
        url: "/img/tenis_4.png",
        cor: "Branco",
      },
      {
        title: "Air Max 3.0",
        url: "/img/tenis_5.png",
        cor: "Branco",
      },
      {
        title: "Air Max 3.0",
        url: "/img/tenis_6.png",
        cor: "Branco",
      },
    ],
  },
  {
    idPrd: 5,
    name: "Mizuno Ls",
    description: "TAM - 38 ao 43",
    category: "Tenis",
    value: 470,
    photo: [
      {
        title: "Mizuno Ls",
        url: "/img/tenis_13.png",
        cor: "Azul",
      },
      {
        title: "Mizuno Ls",
        url: "/img/tenis_14.png",
        cor: "Branco",
      },
      {
        title: "Mizuno Ls",
        url: "/img/tenis_12.png",
        cor: "Preto",
      },
    ],
  },
  {
    idPrd: 6,
    name: "Corta Vento Nike",
    description: "Corta vento impermeavel",
    category: "Blusa",
    value: 159.99,
    photo: [
      {
        title: "Corta Vento Impermeavel",
        url: "/img/blusa_1.png",
        cor: "Azul",
      },
      {
        title: "Corta Vento Impermeavel",
        url: "/img/blusa_2.png",
        cor: "Branco",
      },
    ],
  },
  {
    idPrd: 7,
    name: "Camisa Time",
    description: "Linha camisas de Time, liga italiana",
    category: "Camisa",
    value: 140.0,
    photo: [
      {
        title: "Camisa Milan",
        url: "/img/camisa_1.png",
      },
    ],
  },
  {
    idPrd: 8,
    name: "Camisa Real Madrid",
    description: "Ultra pedid, LaLiga -> Camisa Real",
    category: "Camisa",
    value: 140.0,
    photo: [
      {
        title: "Camisa Real",
        url: "/img/camisa_2.png",
        cor: "Branco",
      },
    ],
  },
  {
    idPrd: 9,
    name: "Camisa Lacoste",
    description: "Tamanho - M, G, GG",
    category: "Camisa",
    value: 95.0,
    photo: [
      {
        title: "Camisa Lacoste",
        url: "/img/camisa_3.png",
        cor: "Preto",
      },
      {
        title: "Camisa Lacoste",
        url: "/img/camisa_4.png",
        cor: "Branco",
      },
      {
        title: "Camisa Lacoste",
        url: "/img/camisa_5.png",
        cor: "Azul",
      },
    ],
  },
  {
    idPrd: 10,
    name: "Relogio",
    description: "Hugo Boss",
    category: "Relogio",
    value: 170.0,
    photo: [
      {
        title: "Relogio",
        url: "/img/clock_1.png",
        cor: "Preto",
      },
    ],
  },
  {
    idPrd: 11,
    name: "Relogio",
    description: "Hilfiger",
    category: "Relogio",
    value: 170.0,
    photo: [
      {
        title: "Relogio",
        url: "/img/clock_2.png",
        cor: "Preto",
      },
    ],
  },
  {
    idPrd: 12,
    name: "Calça Moleton",
    description: "Tamanhos - M, G, GG",
    category: "Calça",
    value: 120.0,
    photo: [
      {
        title: "Calça Moleton",
        url: "/img/calca_1.png",
      },
    ],
  },
  {
    idPrd: 13,
    name: "Juliet",
    description: "Lupa pra cada dia",
    category: "Lupa",
    value: 130.0,
    photo: [
      {
        title: "Juliet",
        url: "/img/lupa_1.png",
      },
      {
        title: "Juliet",
        url: "/img/lupa_3.png",
      },
    ],
  },
  {
    idPrd: 14,
    name: "Juliet",
    description: "Juliet, Romeo 2 x metal, Juliet com a lente ruby",
    category: "Lupa",
    value: 130.0,
    photo: [
      {
        title: "Juliet",
        url: "/img/lupa_2.png",
      },
      {
        title: "Juliet",
        url: "/img/lupa_3.png",
      },
    ],
  },
  {
    idPrd: 15,
    name: "Polo Lacoste",
    description: "Tamanho - P, M, G, GG",
    category: "Camisa",
    value: 100.0,
    photo: [
      {
        title: "Polo Lala",
        url: "/img/camisa_6.png",
        cor: "Verde",
      },
      {
        title: "Polo Lala",
        url: "/img/camisa_7.png",
        cor: "Azul",
      },
      {
        title: "Polo Lala",
        url: "/img/camisa_8.png",
        cor: "Vermelho",
      },
    ],
  },
  {
    idPrd: 16,
    name: "CAP Hugo Boss",
    description: "Linha Hugo Boss, adquira seu cap exclusivo",
    category: "Bone",
    value: 45.0,
    photo: [
      {
        title: "Hugo Boss",
        url: "/img/bones_2.png",
      },
      {
        title: "Cap HB",
        url: "/img/bones_3.png",
      },
    ],
  },
];

interface IProdutosProps {
    category?: string | null
}

export const getProducts = ({
    category
}: IProdutosProps) => {
    
    if (typeof category === 'string') {
        return products.filter(prod => prod.category.toUpperCase() === category.toUpperCase());
    }

    return products;
}