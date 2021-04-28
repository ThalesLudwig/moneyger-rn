import React, { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import Calendar from "../../components/Calendar";
import Bill from "../../components/Bill";
import Pill from "../../components/Pill";
import FilterConstants from "../../constants/filters";
import { statusName } from "../../constants/status";
import store from "../../config/store";
import { remove } from "../../config/billSlice";
import {
  Main,
  Empty,
  EmptyWrapper,
  EmptyText,
  Filters,
  ScrollWrapper,
  NoResults,
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

  const renderBills = () => {
    if (bills.value.length === 0) {
      return renderEmpty();
    }
    const filteredBills = bills.value.filter(filterBills).map((b) => (
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
      </ScrollWrapper>
    </Main>
  );
};

const mapStateToProps = (state) => {
  return { bills: state.bills };
};

export default connect(mapStateToProps)(Home);
