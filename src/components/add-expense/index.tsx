import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Calendar, CalendarChangeEvent } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

import css from "./style.module.css";
import { useState } from "react";

const categories = [
  { name: "Food", code: "food" },
  { name: "Gifts", code: "gifts" },
  { name: "Drugs", code: "drugs" },
  { name: "Drinks", code: "drinks" },
  { name: "Extraordinary", code: "extraordinary" },
  { name: "Bills", code: "bills" },
  { name: "Other", code: "other" },
];

export default function AddExpense(props: { addExpenseHandler: Function }) {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<string>();
  const [category, setCategory] = useState<any>();

  function handler() {
    props.addExpenseHandler({
      name: title,
      amount,
      date: new Date(date as any),
      category: category.name,
    });
  }
  return (
    <div className={css.addExpenseForm}>
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <i className="pi pi-bookmark"></i>
        </span>
        <InputText
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          placeholder="title"
        />
      </div>
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">$</span>
        <InputNumber
          onChange={(event) => {
            setAmount(Number(event.value));
          }}
          placeholder="Amount"
        />
        <span className="p-inputgroup-addon">.00</span>
      </div>
      <div className="p-inputgroup">
        <Calendar
          onChange={(event: CalendarChangeEvent) => {
            setDate(event.value?.toLocaleString());
          }}
          showIcon
        />
      </div>
      <div className="p-inputgroup">
        <Dropdown
          value={category}
          onChange={(e) => setCategory(e.value)}
          options={categories}
          optionLabel="name"
          placeholder="Select a Category"
          filter
          className="w-full md:w-14rem"
        />
      </div>
      <div className={css.buttonContainer}>
        <Button disabled={!title} onClick={handler}>
          Save
        </Button>
      </div>
    </div>
  );
}
