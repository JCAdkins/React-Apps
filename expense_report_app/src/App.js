import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";
import { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const onAddExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  /* UTILIZE THESE METHODS TO CHANGE THE SORT FROM DATE/AMOUNT/ALPHABETICAL
  const sortByDate = (data) => {
    return data.sort((a, b) => {
      if (a.date.getTime() < b.date.getTime()) {
        return -1;
      }
      if (a.date.getTime() > b.date.getTime()) {
        return 1;
      }
      return 0;
    });
  };

  const sortByAmount = (data) => {
    return data.sort((a, b) => {
      if (a.amount < b.amount) {
        return -1;
      }
      if (a.amount > b.amount) {
        return 1;
      }
      return 0;
    });
  };

  const sortByAlphabetical = (data) => {
    return data.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  };
  */

  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
