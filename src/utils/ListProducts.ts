import { CategoryType, IProduto } from "@/interface/IProduto";


const products: IProduto[] = [
  {
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
    name: "Camisa Real Madrid",
    description: "Ultra pedida, LaLiga -> Camisa Real",
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