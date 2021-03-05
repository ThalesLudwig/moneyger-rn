import React, { useState } from "react";
import moment from "moment";
import {
  BillsWrapper,
  Main,
} from "./HomeStyled";
import Calendar from "../../components/Calendar";
import Bill from "../../components/Bill";
import STATUS_LIST from "../../constants/status";

export default function Home() {
  const [date, setDate] = useState(moment());

  return (
    <Main>
      <Calendar
        onNext={(date) => setDate(date)}
        onPrevious={(date) => setDate(date)}
      />
      <BillsWrapper>
        <Bill title="Luz" amount="125,00" status={STATUS_LIST.NOT_RECEIVED} />
        <Bill
          title="Aluguel"
          paidOn="01/03/2021"
          amount="1405,20"
          receivedOn="21/02/2021"
          status={STATUS_LIST.PAID}
        />
        <Bill title="Água" status={STATUS_LIST.NOT_RECEIVED} />
        <Bill
          title="Internet"
          amount="100,00"
          receivedOn="21/02/2021"
          status={STATUS_LIST.RECEIVED}
        />
        <Bill title="Faculdade" paidOn="01/03/2021" status={STATUS_LIST.PAID} />
        <Bill title="Netflix" status={STATUS_LIST.NOT_RECEIVED} />
        <Bill title="Disney+" amount="30,00" status={STATUS_LIST.PAID} />
        <Bill title="Google One" status={STATUS_LIST.NOT_RECEIVED} />
        <Bill title="Apple" status={STATUS_LIST.RECEIVED} />
        <Bill
          title="Microsoft Office"
          paidOn="01/03/2021"
          receivedOn="21/02/2021"
          status={STATUS_LIST.PAID}
        />
      </BillsWrapper>
    </Main>
  );
}
