import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import moment from "moment";
import Calendar from "../../components/Calendar";
import Bill from "../../components/Bill";
import Pill from "../../components/Pill";
import Card from "../../components/Card";
import replaceDotForComma from "../../utils/replaceDotForComma";
import FilterConstants from "../../constants/filters";
import StatusConstants, { statusName, statusColor } from "../../constants/status";
import { updateDate } from "../../config/dateSlice";
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

const Home = ({ date, bills, navigation }) => {
  const [activeFilter, setActiveFilter] = useState(FilterConstants.ALL);
  const dispatch = useDispatch();
  const DATE_FORMAT = "YYYY-MM";

  const currentMonthBills = bills.value.filter(
    (bill) => moment(bill.receivedOn, "YYYY-MM-DD").format(DATE_FORMAT) == date,
  );

  const renderEmpty = () => {
    return (
      <EmptyWrapper>
        <Empty />
        <EmptyText>No bills to display.</EmptyText>
        <EmptyText>Add something!</EmptyText>
      </EmptyWrapper>
    );
  };

  const renderNoResults = () => {
    return (
      <EmptyWrapper>
        <NoResults />
        <EmptyText>No bills found</EmptyText>
        <EmptyText>with the selected filter.</EmptyText>
      </EmptyWrapper>
    );
  };

  const getTotalAmount = () => {
    if (currentMonthBills.length === 0) return 0;
    if (currentMonthBills.length === 1) {
      return parseFloat(currentMonthBills[0].amount) || 0;
    }
    const total = currentMonthBills.reduce((acc, curr) => {
      const parsedAcc = parseFloat(acc) || parseFloat(acc?.amount) || parseFloat(acc?.amount) || 0;
      const parsedCurr = parseFloat(curr?.amount) || parseFloat(curr?.amount) || 0;
      return parsedAcc + parsedCurr;
    });
    return total;
  };

  const getPaidAmount = () => {
    const result = currentMonthBills.filter((b) => b?.status === StatusConstants.PAID);
    if (result.length === 0) return 0;
    if (result.length === 1) return parseFloat(result[0]?.amount);
    return result.reduce((acc, curr) => {
      const parsedAcc = parseFloat(acc) || parseFloat(acc?.amount) || 0;
      const parsedCurr = parseFloat(curr?.amount) || 0;
      return parsedAcc + parsedCurr;
    });
  };

  const getReceivedAmount = () => {
    const result = currentMonthBills.filter((b) => b?.status === StatusConstants.RECEIVED);
    if (result.length === 0) return 0;
    if (result.length === 1) return parseFloat(result[0]?.amount);
    return result.reduce((acc, curr) => {
      const parsedAcc = parseFloat(acc) || parseFloat(acc?.amount) || 0;
      const parsedCurr = parseFloat(curr?.amount) || 0;
      return parsedAcc + parsedCurr;
    });
  };

  const renderBills = () => {
    if (currentMonthBills.length === 0) return renderEmpty();
    const filteredBills = currentMonthBills
      .filter((bill) => bill.status === activeFilter || activeFilter === FilterConstants.ALL)
      .map((b) => (
        <Bill
          id={b.id}
          title={b.title}
          amount={replaceDotForComma(b.amount)}
          status={b.status || 0}
          key={b.id}
          onEdit={() => navigation.navigate("Edit", { bill: b })}
        />
      ));
    return filteredBills.length === 0 ? renderNoResults() : filteredBills;
  };

  return (
    <Main>
      <ScrollWrapper>
        <Cards>
          <Card
            title="Total"
            amount={replaceDotForComma(getTotalAmount())}
            color={statusColor[StatusConstants.NOT_RECEIVED]}
          />
          <Card title="Paid" amount={replaceDotForComma(getPaidAmount())} color={statusColor[StatusConstants.PAID]} />
          <Card
            title="Received"
            amount={replaceDotForComma(getReceivedAmount())}
            color={statusColor[StatusConstants.RECEIVED]}
          />
        </Cards>
        <ContentWrapper>
          <Calendar
            onNext={(date) => dispatch(updateDate(moment(date).format(DATE_FORMAT)))}
            onPrevious={(date) => dispatch(updateDate(moment(date).format(DATE_FORMAT)))}
          />
          <Filters>
            <Pill
              active={activeFilter === FilterConstants.ALL}
              onPress={() => setActiveFilter(FilterConstants.ALL)}
              value="Everything"
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
          </Filters>
          {renderBills()}
        </ContentWrapper>
      </ScrollWrapper>
    </Main>
  );
};

const mapStateToProps = (state) => {
  return { bills: state.bills, date: state.date.value };
};

export default connect(mapStateToProps)(Home);
