import { useState, useEffect, useRef } from "react";
// import "./App.css";
import Header from "../../header";
import Controls from "./controls";
import AddExpense from "./add-expense";
import ExpensesList from "./expenses-list";
import Reports from "./reports";
import { ProgressSpinner } from "primereact/progressspinner";
import { Toast } from "primereact/toast";
const baseUrl = `http://localhost:3600`;
import axios from "axios";
import getYearsApi from "../../../services/getYearsApi";
import addNewExpenseApi from "../../../services/addNewExpenseApi";
import deleteExpenseApi from "../../../services/deleteExpenseApi";
function Expenses() {
  const [isAddExpenseVisible, setIsExpenseVisible] = useState(false);
  const [isReportsVisible, setIsReportsVisible] = useState(false);
  const [expenses, setExpenses] = useState<Array<any>>([]);
  const [isExpensesLoading, setIsExpensesLoading] = useState(false);
  const toast = useRef<any>(null);
  const [selectedYear, setSelectedYear] = useState<{
    name: string;
    code: string;
  } | null>(null);
  const [selectedCategory, setCategory] = useState<{
    name: string;
    code: string;
  } | null>(null);
  const [years, setYears] = useState([]);
  const [isFilterYearsLoading, setIsFilterYearsLoading] = useState(false);

  const handler = (expenseVisibility: boolean) => {
    setIsExpenseVisible(expenseVisibility);
  };
  async function getExpenses() {
    try {
      setIsExpensesLoading(true);
      const result = await axios.get(`${baseUrl}/expenses`);
      const dataWithDates = result.data.map((e: any) => {
        return { ...e, date: new Date(e.date) };
      });
      setExpenses(dataWithDates);
    } catch (error) {
      toast?.current?.show({
        severity: "error",
        summary: "Something Went wrong",
        detail: "Please try again",
      });
    } finally {
      setIsExpensesLoading(false);
    }
  }
  async function addExpenseHandler(expense: any) {
    //onSave({...})
    try {
      const result: any = await addNewExpenseApi(expense);
      if (result?.message === "success") {
        toast?.current?.show({
          severity: "success",
          summary: `Expense ${expense.name} Added Successfully`,
        });
        getExpenses();
      } else {
        throw new Error("Response failed");
      }
    } catch (error) {
      toast?.current?.show({
        severity: "error",
        summary: `Expense ${expense.name} Not Added`,
      });
    }
    // setExpenses([...expenses, expense]);
  }

  async function deleteExpenseHandler(expenseName: string) {
    try {
      const result: any = await deleteExpenseApi(expenseName);
      if (result?.message?.toLowerCase() === "deleted successfully") {
        toast?.current?.show({
          severity: "success",
          summary: `Expense ${expenseName} Deleted Successfully`,
        });
        getExpenses();
      } else {
        throw new Error("Response failed");
      }
    } catch (error) {
      toast?.current?.show({
        severity: "error",
        summary: `Expense ${expenseName} Was Not deleted`,
      });
    }
    // setExpenses([...expenses, expense]);
  }

  useEffect(() => {
    async function getYears() {
      try {
        setIsFilterYearsLoading(true);
        const years = await getYearsApi();
        setYears(years as any);
      } catch (error) {
        toast?.current?.show({
          severity: "error",
          summary: "Years missing",
          detail: "Please try again",
        });
      } finally {
        setIsFilterYearsLoading(false);
      }
    }

    getExpenses();
    getYears();
  }, []);

  //   const allYears = expenses
  //     .map((e) => {
  //       const year = new Date(e.date).getFullYear().toString();
  //       return { code: year, name: year };
  //     })
  //     .reduce((yearsObj: any, currentYear) => {
  //       yearsObj[currentYear.code] = currentYear;
  //       return yearsObj;
  //     }, {});

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
      <Toast ref={toast} />
      <Header text={"My Expenses"} />
      {/* <WithLoading isLoading={isFilterYearsLoading}> */}
      <Controls {..._getControlsProps()} />
      {/* </WithLoading> */}
     
      {isAddExpenseVisible ? (
        <AddExpense addExpenseHandler={addExpenseHandler} />
      ) : null}

      {isReportsVisible ? <Reports data={filteredExpensesCat} /> : null}
      <WithLoading isLoading={isExpensesLoading}>
        <ExpensesList
            expenses={filteredExpensesCat}
            onDelete={deleteExpenseHandler}
          />
      </WithLoading>
    </div>
  );

  function _getControlsProps() {
    return {
      changeExpenseVisibility: handler,
      isAddExpenseVisible: isAddExpenseVisible,
      yearsOptions: [{ code: "all", name: "All" }, ...years],
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
      isFilterYearsLoading,
    };
  }
}

export default Expenses;



function WithLoading(props: { isLoading:boolean, children:any }){
  if(props.isLoading) return  <ProgressSpinner/>
  else return props.children
}