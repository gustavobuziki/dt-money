import { useTransactionsCxt } from "~/contexts";

import * as s from "./styled-transactions-table";

const TransactionsTable = () => {
  const { transactions } = useTransactionsCxt();

  return (
    <s.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.value)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {" "}
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.date)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </s.Container>
  );
};

export default TransactionsTable;
