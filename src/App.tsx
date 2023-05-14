import "./App.css";
import Header from "./components/header";
import Controls from "./components/controls";
import AddExpense from "./components/add-expense";
import ExpensesList from "./components/expenses-list";
import Reports from "./components/reports";
import { data } from "./data";
export type May = (typeof data)[0];

function App() {
  return (
    <>
      <Header text={"My Expenses"} />
      <Controls />
      <AddExpense />
      <Reports />
      <ExpensesList />
    </>
  );
}

export default App;
