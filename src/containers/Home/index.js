import React, { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import Calendar from "../../components/Calendar";
import Bill from "../../components/Bill";
import store from "../../config/store";
import { remove } from "../../config/billSlice";
import {
  BillsWrapper,
  Main,
  Empty,
  EmptyWrapper,
  EmptyText,
} from "./HomeStyled";

const Home = ({ bills, navigation }) => {
  const [date, setDate] = useState(moment());

  const renderEmpty = () => {
    return (
      <EmptyWrapper>
        <Empty />
        <EmptyText>Sem despesas para exibir.</EmptyText>
        <EmptyText>Adicione algo!</EmptyText>
      </EmptyWrapper>
    );
  };

  const renderBills = () => {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth() + 1;

    if (bills.value.length === 0) {
      return renderEmpty();
    }
    const billList = [];
    bills.value.map((b) => {
      billList.push(
        <Bill
          id={b.id}
          title={b.title}
          // paidOn={b.data?.[year]?.[month]?.paidOn || null}
          amount={parseFloat(
            (b.data?.[year]?.[month]?.amount || "0,00").replace(",", ".")
          )
            .toFixed(2)
            .replace(".", ",")}
          // receivedOn={b.data?.[year]?.[month]?.receivedOn || null}
          status={b.data?.[year]?.[month]?.status || 0}
          key={b.id}
          // onRemove={() => store.dispatch(remove(b.id))}
          onEdit={() =>
            navigation.navigate("Edit", {
              bill: b,
              month,
              year,
            })
          }
        />
      );
    });
    return billList;
  };

  return (
    <Main>
      <Calendar
        onNext={(date) => setDate(date)}
        onPrevious={(date) => setDate(date)}
      />
      <BillsWrapper>{renderBills()}</BillsWrapper>
    </Main>
  );
};

const mapStateToProps = (state) => {
  return { bills: state.bills };
};

export default connect(mapStateToProps)(Home);
