import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Controls from "./components/controls";
import AddExpense from "./components/add-expense";
import ExpensesList from "./components/expenses-list";
import Reports from "./components/reports";
import { ProgressSpinner } from "primereact/progressspinner";

import axios from "axios";
// type Expense = (typeof data)[0];
function App() {
  const [isAddExpenseVisible, setIsExpenseVisible] = useState(false);
  const [isReportsVisible, setIsReportsVisible] = useState(false);
  const [expenses, setExpenses] = useState<Array<any>>([]);
  const [isExpensesLoading, setIsExpensesLoading] = useState(false);
  const [selectedYear, setSelectedYear] = useState<{
    name: string;
    code: string;
  } | null>(null);
  const [selectedCategory, setCategory] = useState<{
    name: string;
    code: string;
  } | null>(null);
  const handler = (expenseVisibility: boolean) => {
    setIsExpenseVisible(expenseVisibility);
  };

  useEffect(() => {
    async function getExpenses() {
      try {
        setIsExpensesLoading(true);
        const result = await axios.get("http://localhost:3500/expenses");
        const dataWithDates = result.data.map((e: any) => {
          return { ...e, date: new Date(e.date) };
        });
        setExpenses(dataWithDates);
      } catch (error) {
        //  popupMessage
      } finally {
        setIsExpensesLoading(false);
      }
    }

    getExpenses();
  }, []);

  const allYears = expenses
    .map((e) => {
      const year = new Date(e.date).getFullYear().toString();
      return { code: year, name: year };
    })
    .reduce((yearsObj: any, currentYear) => {
      yearsObj[currentYear.code] = currentYear;
      return yearsObj;
    }, {});

  const allCategories = expenses
    .map((e) => {
      return { code: e.category.toString(), name: e.category.toString() };
    })
    .reduce((catObj: any, currentCat) => {
      catObj[currentCat.code] = currentCat;
      return catObj;
    }, {});

  const filteredExpensesYear =
    !selectedYear || selectedYear?.code === "all"
      ? expenses
      : expenses.filter((e) => {
          return e.date.getFullYear().toString() === selectedYear?.code;
        });

  const filteredExpensesCat =
    !selectedCategory || selectedCategory?.code === "all"
      ? filteredExpensesYear
      : filteredExpensesYear.filter((e) => {
          return e.category.toString() === selectedCategory?.code;
        });

  return (
    <div style={{ background: "lightgray" }}>
      <Header text={"My Expenses"} />
      <Controls {..._getControlsProps()} />
      {isAddExpenseVisible ? (
        <AddExpense
          onSave={(expense: any) => {
            setExpenses([...expenses, expense]);
          }}
        />
      ) : null}

      {isReportsVisible ? <Reports data={filteredExpensesCat} /> : null}
      {isExpensesLoading ? (
        <ProgressSpinner />
      ) : (
        <ExpensesList expenses={filteredExpensesCat} />
      )}
    </div>
  );

  function _getControlsProps() {
    return {
      changeExpenseVisibility: handler,
      isAddExpenseVisible: isAddExpenseVisible,
      yearsOptions: [{ code: "all", name: "All" }, ...Object.values(allYears)],
      categoriesOptions: [
        { code: "all", name: "All" },
        ...Object.values(allCategories),
      ],
      setYearHandler: setSelectedYear,
      selectedYear,
      selectedCategory: selectedCategory,
      setCategoryHandler: setCategory,
      isReportsVisible,
      changeReportsVisibility: setIsReportsVisible,
    };
  }
}

export default App;
