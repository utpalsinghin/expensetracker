import React, { useState } from "react";
import "./ExpenseForm.css";
export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   }); Alternative method, if we want to use single useState.
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({ ...userInput, enteredTitle: event.target.value });  //If using single useState this will Not work in every case, beacuse react schedule the update.
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // }); //If using single useState this will work in every case since it state will be updated on the go because of function call.
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({ ...userInput, enteredAmount: event.target.value });  //If using single useState this will Not work in every case, beacuse react schedule the update.
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // }); //If using single useState this will work in every case since it state will be updated on the go because of function call.
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({ ...userInput, enteredDate: event.target.value });  //If using single useState this will Not work in every case, beacuse react schedule the update.
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value,
    //   };
    // }); //If using single useState this will work in every case since it state will be updated on the go because of function call.
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler} action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            name=""
            id=""
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
            name=""
            id=""
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2023-12-31"
            name=""
            id=""
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
