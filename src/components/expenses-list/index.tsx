import { data } from "../../data";

import { OrderList } from "primereact/orderlist";

type ExpenseType = (typeof data)[0];

export default function ExpensesList(props: {
  expenses: Array<ExpenseType>;
  onDelete: Function;
}) {
  const { expenses } = props;

  const expenseTemplate = (item: any) => {
    return (
      <div
        key={item.name}
        className="flex flex-wrap p-2 align-items-center gap-3"
      >
        <div className="flex-1 flex flex-column gap-2 xl:mr-8">
          <span className="font-bold">{item.name}</span>
          <div className="flex align-items-center gap-2">
            <i className="pi pi-tag text-sm"></i>
            <span>{item.category}</span>
            <h3>{item.date.toLocaleDateString()}</h3>
          </div>
        </div>
        <span className="font-bold text-900">${item.amount}</span>
        <button
          onClick={() => {
            props.onDelete(item.name);
          }}
        >
          <i className="pi pi-trash"></i>
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className="card xl:flex xl:justify-content-center">
        <OrderList
          value={expenses}
          itemTemplate={expenseTemplate}
          header="Expenses"
        ></OrderList>
      </div>
    </div>
  );
}
