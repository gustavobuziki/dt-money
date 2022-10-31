import { Summary, TransactionsTable } from "../";

import * as s from "./styled-dashboard";

const Dashboard = () => {
  return (
    <s.Container>
      <Summary />
      <TransactionsTable />
    </s.Container>
  );
};

export default Dashboard;
