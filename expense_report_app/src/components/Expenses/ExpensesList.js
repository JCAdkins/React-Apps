import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import Card from "../UI/Card";

const ExpensesList = (props) => {
  let expensesContent = (
    <h3>
      <Card className="expenses-list__fallback">No expenses found.</Card>
    </h3>
  );

  if (props.expenses.length > 0) {
    expensesContent = props.expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={Number(expense.amount).toFixed(2)}
        date={expense.date}
      />
    ));
  }

  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
