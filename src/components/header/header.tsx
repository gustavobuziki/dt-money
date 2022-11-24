import { Logo } from "~/assets";

import * as s from "./styled-header";

interface IHeaderProps {
  openNewTransactionModal: () => void;
}

const Header = ({ openNewTransactionModal }: IHeaderProps) => {
  return (
    <s.Container>
      <s.Content>
        <Logo title="Logo" />
        <button type="button" onClick={openNewTransactionModal}>
          Nova transação
        </button>
      </s.Content>
    </s.Container>
  );
};

export default Header;
