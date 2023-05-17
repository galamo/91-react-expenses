import { Button } from "primereact/button";
import css from "./style.module.css";
import { Dropdown } from "primereact/dropdown";

export default function Controls(props: {
  isAddExpenseVisible: boolean;
  changeExpenseVisibility: Function;
  options: Array<{ code: string; name: string }> | any;
  setYearHandler: Function;
  selectedYear: any;
}) {
  const { isAddExpenseVisible, changeExpenseVisibility, selectedYear } = props;
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
        <Button>Reports</Button>
        <Dropdown
          value={selectedYear}
          onChange={(e) => {
            props.setYearHandler(e.value);
          }}
          options={props.options}
          optionLabel="name"
          placeholder="Select a Year"
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
