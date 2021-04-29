import React, { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import Calendar from "../../components/Calendar";
import Bill from "../../components/Bill";
import Pill from "../../components/Pill";
import Card from "../../components/Card";
import toBrazilianReal from "../../utils/toBrazilianReal";
import FilterConstants from "../../constants/filters";
import StatusConstants, {
  statusName,
  statusColor,
} from "../../constants/status";
import {
  Main,
  Empty,
  EmptyWrapper,
  EmptyText,
  Filters,
  ScrollWrapper,
  NoResults,
  Cards,
  ContentWrapper,
} from "./HomeStyled";

const Home = ({ bills, navigation }) => {
  const [date, setDate] = useState(moment());
  const [activeFilter, setActiveFilter] = useState(FilterConstants.ALL);
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth() + 1;

  const renderEmpty = () => {
    return (
      <EmptyWrapper>
        <Empty />
        <EmptyText>Sem despesas para exibir.</EmptyText>
        <EmptyText>Adicione algo!</EmptyText>
      </EmptyWrapper>
    );
  };

  const renderNoResults = () => {
    return (
      <EmptyWrapper>
        <NoResults />
        <EmptyText>Nenhuma despesa encontrada</EmptyText>
        <EmptyText>com o filtro selecionado.</EmptyText>
      </EmptyWrapper>
    );
  };

  const filterBills = (currentBill) => {
    const currentStatus = currentBill.data?.[year]?.[month]?.status || 0;
    return (
      currentStatus === activeFilter || activeFilter === FilterConstants.ALL
    );
  };

  const getTotalAmount = () => {
    if (bills.value.length === 0) return 0;
    const total = bills.value.reduce((acc, curr) => {
      const parsedAcc =
        parseFloat(acc) || parseFloat(acc.data?.[year]?.[month]?.amount) || 0;
      const parsedCurr = parseFloat(curr.data?.[year]?.[month]?.amount) || 0;
      return parsedAcc + parsedCurr;
    });
    return total;
  };

  const getPaidAmount = () => {
    const result = bills.value.filter(
      (b) => b.data?.[year]?.[month]?.status === StatusConstants.PAID
    );
    if (result.length === 0) return 0;
    if (result.length === 1) {
      return parseFloat(result[0].data?.[year]?.[month]?.amount);
    }
    return result.reduce((acc, curr) => {
      const parsedAcc =
        parseFloat(acc) || parseFloat(acc.data?.[year]?.[month]?.amount) || 0;
      const parsedCurr = parseFloat(curr.data?.[year]?.[month]?.amount) || 0;
      return parsedAcc + parsedCurr;
    });
  };

  const getReceivedAmount = () => {
    const result = bills.value.filter(
      (b) => b.data?.[year]?.[month]?.status === StatusConstants.RECEIVED
    );
    if (result.length === 0) return 0;
    if (result.length === 1) {
      return parseFloat(result[0].data?.[year]?.[month]?.amount);
    }
    return result.reduce((acc, curr) => {
      const parsedAcc =
        parseFloat(acc) || parseFloat(acc.data?.[year]?.[month]?.amount) || 0;
      const parsedCurr = parseFloat(curr.data?.[year]?.[month]?.amount) || 0;
      return parsedAcc + parsedCurr;
    });
  };

  const getCurrentAmount = (currentBill) => {
    return toBrazilianReal(
      parseFloat(
        (
          currentBill.data?.[year]?.[month]?.amount ||
          currentBill.amount ||
          "0,00"
        ).replace(",", ".")
      )
    );
  };

  const renderBills = () => {
    if (bills.value.length === 0) {
      return renderEmpty();
    }
    const filteredBills = bills.value.filter(filterBills).map((b) => (
      <Bill
        id={b.id}
        title={b.title}
        amount={getCurrentAmount(b)}
        status={b.data?.[year]?.[month]?.status || 0}
        key={b.id}
        onEdit={() =>
          navigation.navigate("Edit", {
            bill: b,
            month,
            year,
          })
        }
      />
    ));
    if (filteredBills.length === 0) {
      return renderNoResults();
    } else {
      return filteredBills;
    }
  };

  return (
    <Main>
      <ScrollWrapper>
        <Cards>
          <Card
            title="Total adicionado"
            amount={toBrazilianReal(getTotalAmount())}
            color={statusColor[StatusConstants.NOT_RECEIVED]}
          />
          <Card
            title="Total pago"
            amount={toBrazilianReal(getPaidAmount())}
            color={statusColor[StatusConstants.PAID]}
          />
          <Card
            title="Total a pagar"
            amount={toBrazilianReal(getReceivedAmount())}
            color={statusColor[StatusConstants.RECEIVED]}
          />
        </Cards>
        <ContentWrapper>
          <Calendar
            onNext={(date) => setDate(date)}
            onPrevious={(date) => setDate(date)}
          />
          <Filters>
            <Pill
              active={activeFilter === FilterConstants.ALL}
              onPress={() => setActiveFilter(FilterConstants.ALL)}
              value="Todos"
            />
            <Pill
              active={activeFilter === FilterConstants.PAID}
              onPress={() => setActiveFilter(FilterConstants.PAID)}
              value={statusName[FilterConstants.PAID]}
            />
            <Pill
              active={activeFilter === FilterConstants.RECEIVED}
              onPress={() => setActiveFilter(FilterConstants.RECEIVED)}
              value={statusName[FilterConstants.RECEIVED]}
            />
            <Pill
              active={activeFilter === FilterConstants.NOT_RECEIVED}
              onPress={() => setActiveFilter(FilterConstants.NOT_RECEIVED)}
              value={statusName[FilterConstants.NOT_RECEIVED]}
            />
          </Filters>
          {renderBills()}
        </ContentWrapper>
      </ScrollWrapper>
    </Main>
  );
};

const mapStateToProps = (state) => {
  return { bills: state.bills };
};

export default connect(mapStateToProps)(Home);
