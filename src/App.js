import "./styles.css";
import { useState } from "react";
import UsersTable from "./UsersTable";
import ExpensesTable from "./ExpensesTable";
import CompanyExpensesTable from "./CompanyExpensesTable";

// class Users {
//   constructor(data = new Map()) {
//     this.data = data;
//   }
// }

// class Expenses {
//   constructor(data = new Map()) {
//     this.data = data;
//   }
// }

class Expense {
  constructor(id, fullName, category, description, cost) {
    this.id = id;
    this.fullName = fullName;
    this.category = category;
    this.description = description;
    this.cost = cost;
  }
}

class CompanyExpenses {
  constructor(
    totalTravelExpense = 0,
    totalFoodExpense = 0,
    totalSuppliesExpense = 0
  ) {
    this.totalTravelExpense = totalTravelExpense;
    this.totalFoodExpense = totalFoodExpense;
    this.totalSuppliesExpense = totalSuppliesExpense;
  }
}

export default function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="TablesContainer">
        <UsersTable name="Users" setUsers={setUsers} />
        <ExpensesTable name="Expenses" />
        <CompanyExpensesTable name="Company Expenses" />
      </div>
    </div>
  );
}
