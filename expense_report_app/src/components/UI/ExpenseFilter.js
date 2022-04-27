import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onFilterYear(event.target.value);
  };

  const sortByChangeHandler = (event) => {
    props.onSortByChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <div>
          Sort :
          <select value={props.sortType} onChange={sortByChangeHandler}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
            <option value="alphabetical">A-Z</option>
          </select>
        </div>
        <div>
          Filter :
          <select value={props.selected} onChange={yearChangeHandler}>
            <option value="All">All</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ExpenseFilter;
