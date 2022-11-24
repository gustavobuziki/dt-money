import { useState } from "react";

import { Dashboard, Header, NewTransactionModal } from "~/components";
import { TransactionsProvider } from "~/contexts/transactions-context";

const Home = () => {
  const [newTransactionModalIsOpen, setNewTransactionModalIsOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setNewTransactionModalIsOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setNewTransactionModalIsOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header openNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={newTransactionModalIsOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
};

export default Home;
