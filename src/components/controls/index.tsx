import { Button } from "primereact/button";
import css from "./style.module.css";
import { Dropdown } from "primereact/dropdown";

export default function Controls(props: {
  isAddExpenseVisible: boolean;
  isReportsVisible: boolean;
  changeExpenseVisibility: Function;
  changeReportsVisibility: Function;
  yearsOptions: Array<{ code: string; name: string }> | any;
  categoriesOptions: Array<{ code: string; name: string }> | any;
  setYearHandler: Function;
  selectedYear: any;
  selectedCategory: any;
  setCategoryHandler: Function;
}) {
  const {
    isAddExpenseVisible,
    changeExpenseVisibility,
    selectedYear,
    changeReportsVisibility,
    isReportsVisible,
  } = props;
  const text = isAddExpenseVisible ? "Hide" : "Show";
  return (
    <div style={styles.mainDiv}>
      <h3> Controls </h3>
      <div className={css.controlsContainer}>
        <Button
          onClick={() => {
            changeExpenseVisibility(!isAddExpenseVisible);
          }}
        >
          {text} Expense Form
        </Button>
        <Button
          onClick={() => {
            changeReportsVisibility(!isReportsVisible);
          }}
        >
          Reports
        </Button>
        <Dropdown
          value={selectedYear}
          onChange={(e) => {
            props.setYearHandler(e.value);
          }}
          options={props.yearsOptions}
          optionLabel="name"
          placeholder="Select a Year"
          filter
          className="w-full md:w-14rem"
        />
        <Dropdown
          value={props.selectedCategory}
          onChange={(e) => {
            props.setCategoryHandler(e.value);
          }}
          options={props.categoriesOptions}
          optionLabel="name"
          placeholder="Select a Category"
          filter
          className="w-full md:w-14rem"
        />
      </div>
    </div>
  );
}

const styles = {
  mainDiv: {
    background: "lightblue",
    padding: "10px",
    border: "1px solid black",
    borderRadius: "10px",
  },
};
