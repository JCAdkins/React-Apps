import "./NewExpense.css";
import ExpenseForm from "../UI/ExpenseForm";
import AddExpenseButton from "../UI/AddExpenseButton";
import { useState } from "react";

const NewExpense = (props) => {
  const addExpenseClicked = () => {
    setDisplayForm(
      <ExpenseForm
        onCancel={cancelButtonClicked}
        onSubmitNewExpense={submitNewExpenseHandler}
      />
    );
  };

  const submitNewExpenseHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const cancelButtonClicked = () => {
    setDisplayForm(<AddExpenseButton onButtonClick={addExpenseClicked} />);
  };

  const [displayForm, setDisplayForm] = useState(
    <AddExpenseButton onButtonClick={addExpenseClicked} />
  );

  return <div className="new-expense">{displayForm}</div>;
};

export default NewExpense;
