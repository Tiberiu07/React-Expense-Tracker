import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React from "react";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.length === 0 && (
        <p className="expenses-para">No expenses inserted yet</p>
      )}
      {props.items.length > 0 &&
        props.items.map((currentItem) => {
          return (
            <ExpenseItem
              //key prop for performance optimization
              key={currentItem.id}
              title={currentItem.title}
              amount={currentItem.amount}
              date={currentItem.date}
            ></ExpenseItem>
          );
        })}
    </Card>
  );
}

export default Expenses;
