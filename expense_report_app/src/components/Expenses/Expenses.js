import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../UI/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  let filteredExpenses = props.items;
  const sortByDate = (array) => {
    array.sort((a, b) => {
      if (a.date.getTime() < b.date.getTime()) {
        return -1;
      }
      if (a.date.getTime() > b.date.getTime()) {
        return 1;
      }
      return 0;
    });
  };

  const sortByAmount = (array) => {
    array.sort((a, b) => {
      if (Number(a.amount) < Number(b.amount)) {
        return -1;
      }
      if (Number(a.amount) > Number(b.amount)) {
        return 1;
      }
      return 0;
    });
  };

  const sortByAlphabetical = (array) => {
    array.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  };

  const sortChangeHandler = (value) => {
    if (value === "date") {
      setSortType(value);
    } else if (value === "amount") {
      setSortType(value);
    } else {
      setSortType(value);
    }
  };

  const sortBy = (array) => {
    if (sortType === "date") {
      sortByDate(array);
    } else if (sortType === "amount") {
      sortByAmount(array);
    } else {
      sortByAlphabetical(array);
    }
  };

  const [filteredYear, changeFilteredYear] = useState("2022");

  if (filteredYear !== "All") {
    filteredExpenses = props.items.filter(
      (item) => item.date.getFullYear().toString() === filteredYear
    );
  }
  const [sortType, setSortType] = useState("date");

  const filterYearHandler = (value) => {
    changeFilteredYear(value);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onFilterYear={filterYearHandler}
          onSortByChange={sortChangeHandler}
          sortType={sortType}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {sortBy(filteredExpenses)}
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
