import { FormEvent, useState } from "react";
import Modal from "react-modal";

import { Entradas, Fechar, Saidas } from "~/assets";
import { useTransactionsCxt } from "~/contexts/transactions-context";

import * as s from "./styled-new-transaction-modal";

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: INewTransactionModalProps) => {
  const { createNewTransaction } = useTransactionsCxt();

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState<number | "">("");
  const [type, setType] = useState<"deposit" | "withdrawal">("deposit");

  async function handleSubmitNewTransaction(e: FormEvent) {
    e.preventDefault();

    const newTransaction = {
      title,
      value,
      type,
      category,
    };

    await createNewTransaction(newTransaction);

    setCategory("");
    setTitle("");
    setValue("");
    setType("deposit");

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="close-modal">
        <Fechar title="Fechar" />
      </button>

      <s.Container onSubmit={handleSubmitNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
        />
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          placeholder="Valor"
        />

        <s.SelectTransictionContainer isActive={type}>
          <s.SelectButton
            type="button"
            onClick={() => setType("deposit")}
            className="deposit"
          >
            <Entradas title="Entrada" size="24" />
            Entrada
          </s.SelectButton>

          <s.SelectButton
            type="button"
            onClick={() => setType("withdrawal")}
            className="withdrawal"
          >
            <Saidas title="Saída" size="24" />
            Saída
          </s.SelectButton>
        </s.SelectTransictionContainer>

        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Categoria"
        />

        <s.Button className="button-submit" type="submit">
          Cadastrar
        </s.Button>
      </s.Container>
    </Modal>
  );
};

export default NewTransactionModal;
