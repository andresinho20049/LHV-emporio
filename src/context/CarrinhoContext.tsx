"use client";

import usePersistedState from "@/hooks/UsePersistedState";
import { ICart, IProduto } from "@/interface/IProduto";
import {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState
} from "react";

interface ICarrinhoContextData {
  carrinho: ICart[];
  addProduct: (prd: IProduto) => void;
  removeProduct: (prd: IProduto) => void;

  changeQtd: (prdId: number, qtd: number) => void;
  total: number;
}

export const CarrinhoContext = createContext({} as ICarrinhoContextData);

export const useCarrinhoContext = () => {
  return useContext(CarrinhoContext);
};

interface ICarrinhoProviderProps {
  children: ReactNode;
}

export const CarrinhoProvider = ({ children }: ICarrinhoProviderProps) => {
  const [carrinho, setCarrinho] = usePersistedState<ICart[]>('cart_lhv', []);
  const [totalCart, setTotalCart] = useState<number>(0);

  const addProduct = useCallback(
    (newProduct: IProduto) => {

      setCarrinho([...carrinho, {
        produto: newProduct,
        qtd: 1
      }]);
    },
    [carrinho, setCarrinho]
  );

  const removeProduct = useCallback(
    (product_remove: IProduto) => {
      setCarrinho(
        carrinho.filter((cart) => cart.produto.idPrd != product_remove.idPrd)
      );
    },
    [carrinho, setCarrinho]
  );

  const changeQtd = useCallback(
    (prdId: number, qtd: number) => {
      setCarrinho(
        carrinho.map((cart) => {
          if (cart.produto.idPrd === prdId) return { ...cart, qtd: qtd };

          return cart;
        })
      );
    },
    [carrinho, setCarrinho]
  );

  useMemo(() => {
    let total = 0;
    carrinho.forEach((cart) => {
      total += cart.qtd * cart.produto.value;
    });
    setTotalCart(total);
  }, [carrinho]);

  return (
    <CarrinhoContext.Provider value={{ carrinho, addProduct, removeProduct, changeQtd, total: totalCart }}>
      {children}
    </CarrinhoContext.Provider>
  );
};
