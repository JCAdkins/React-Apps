import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const titleChangedHandler = (event) => {
    setInputTitle(event.target.value);
  };

  const amountChangedHandler = (event) => {
    setInputAmount(event.target.value);
  };

  const dateChangedHandler = (event) => {
    setInputDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    if (
      expenseData.title.length > 0 &&
      expenseData.amount.length > 0 &&
      !isNaN(expenseData.date.getDate())
    ) {
      props.onSubmitNewExpense(expenseData);
      resetHandler();
    }
  };

  const resetHandler = () => {
    setInputTitle("");
    setInputAmount("");
    setInputDate("");
    props.onCancel();
  };

  return (
    <div>
      <form onSubmit={submitHandler} onReset={resetHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={inputTitle}
              onChange={titleChangedHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              value={inputAmount}
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangedHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              value={inputDate}
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangedHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="reset">Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
