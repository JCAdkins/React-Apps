import "./AddExpenseButton.css";

const AddExpenseButton = (props) => {
  const buttonClickHandler = (event) => {
    props.onButtonClick(event);
  };

  return (
    <div>
      <div className="new-expense-actions">
        <button onClick={buttonClickHandler}>Add Expense</button>
      </div>
    </div>
  );
};

export default AddExpenseButton;
