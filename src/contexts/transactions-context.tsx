import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "../services/api";

import { TCreateNewTransaction, TTransactions } from "../utils/types";

interface ITransactionsCxtProps {
  children: ReactNode;
}

type TTransactionsContext = {
  createNewTransaction: (
    newTransaction: TCreateNewTransaction
  ) => Promise<void>;
  transactions: TTransactions[];
};

const TransactionsContext = createContext<TTransactionsContext>(
  {} as TTransactionsContext
);

export const TransactionsProvider = ({ children }: ITransactionsCxtProps) => {
  const [transactions, setTransactions] = useState<TTransactions[] | []>([]);

  async function createNewTransaction(newTransaction: TCreateNewTransaction) {
    const response = await api.post("/transactions", {
      ...newTransaction,
      date: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  useEffect(() => {
    api
      .get("transactions")
      .then((resp) => setTransactions(resp.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ createNewTransaction, transactions }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactionsCxt = () => {
  const context = useContext(TransactionsContext);

  return context;
};
