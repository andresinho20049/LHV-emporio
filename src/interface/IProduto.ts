export interface IProduto {
  name: string;
  description: string;
  value: number;
  category: CategoryType;
  photo: IPhotoProduto[];
}

export const categories = ['Tenis', 'Camisa', 'Blusa', 'Bermuda', 'Calça', 'Relogio', 'Bone', 'Chinelo', 'Lupa'] as const;
export type CategoryType = (typeof categories)[number];

interface IPhotoProduto {
    title: string;
    url: string;
    cor?: 'Preto' | 'Azul' | 'Amarelo' | 'Vermelho' | 'Rosa' | 'Marron' | 'Verde' | 'Laranja' | 'Cinza' | 'Branco'
}