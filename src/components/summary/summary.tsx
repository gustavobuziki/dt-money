import { Entradas, Saidas, Total } from "../../assets";
import { useTransactionsCxt } from "../../contexts/";

import * as s from "./styled-summary";

const Summary = () => {
  const { transactions } = useTransactionsCxt();

  const summaryValues = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        (acc.deposit += transaction.value), (acc.total += transaction.value);
      } else {
        (acc.withdrawal += transaction.value), (acc.total -= transaction.value);
      }

      return acc;
    },
    {
      deposit: 0,
      withdrawal: 0,
      total: 0,
    }
  );

  return (
    <s.Container>
      <div>
        <header>
          <p>Entradas</p>
          <Entradas title="Entrada" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summaryValues.deposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <Saidas title="Saída" />
        </header>
        <strong>
          -{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summaryValues.withdrawal)}
        </strong>
      </div>
      <div className="total">
        <header>
          <p>Total</p>
          <Total title="Total" />
        </header>
        <strong>
          {" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summaryValues.total)}
        </strong>
      </div>
    </s.Container>
  );
};

export default Summary;
