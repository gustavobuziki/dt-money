export type TTransactions = {
  category: string;
  date: number;
  id: number;
  title: string;
  type: "deposit" | "withdrawal";
  value: number;
};

export type TCreateNewTransaction = {
  category: string;
  title: string;
  type: "deposit" | "withdrawal";
  value: number | "";
};
