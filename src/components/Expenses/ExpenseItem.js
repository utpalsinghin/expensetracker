import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
export default function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="title-amount expense-item__description">
        <h2 className="title">{props.title}</h2>
        <div className="amount expense-item__price">₹ {props.amount}</div>
      </div>
    </Card>
  );
}
