import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import React, { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => {
      return [expense, ...prev];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />;
    </div>
  );
}

export default App;
