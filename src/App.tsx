import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Controls from "./components/controls";
import AddExpense from "./components/add-expense";
import ExpensesList from "./components/expenses-list";
import Reports from "./components/reports";
import { data } from "./data";
// type Expense = (typeof data)[0];
function App() {
  const [isAddExpenseVisible, setIsExpenseVisible] = useState(true);
  const [expenses, setExpenses] = useState(data);
  const [selectedYear, setSelectedYear] = useState(null);
  const handler = (expenseVisibility: boolean) => {
    setIsExpenseVisible(expenseVisibility);
  };

  const allYears = expenses
    .map((e) => {
      const year = new Date(e.date).getFullYear().toString();
      return { code: year, name: year };
    })
    .reduce((yearsObj: any, currentYear) => {
      yearsObj[currentYear.code] = currentYear;
      return yearsObj;
    }, {});

  return (
    <div style={{ background: "coral" }}>
      {expenses.length}
      <Header text={"My Expenses"} />
      <Controls {..._getControlsProps()} />
      {isAddExpenseVisible ? (
        <AddExpense
          onSave={(expense: any) => {
            setExpenses([...expenses, expense]);
          }}
        />
      ) : null}
      <Reports />
      <ExpensesList />
    </div>
  );

  function _getControlsProps() {
    return {
      changeExpenseVisibility: handler,
      isAddExpenseVisible: isAddExpenseVisible,
      options: [{ code: "all", name: "All" }, ...Object.values(allYears)],
      setYearHandler: setSelectedYear,
      selectedYear,
    };
  }
}

export default App;
