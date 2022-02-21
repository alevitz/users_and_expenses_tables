import "./styles.css";
import Table from "./Table";

class User {
  constructor(
    id,
    firstName,
    lastName,
    foodExpense = 0,
    travelExpense = 0,
    suppliesExpense = 0
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.expenses = new Expenses();
    this.totalExpenses =
      this.foodExpense + this.suppliesExpense + this.travelExpense;
    this.foodExpense = foodExpense;
    this.travelExpense = travelExpense;
    this.suppliesExpense = suppliesExpense;
  }
}

class Users {
  constructor(data = new Map()) {
    this.data = data;
  }
}

class Expenses {
  constructor(data = new Map()) {
    this.data = data;
  }
}

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
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Table />
      <Table />
      <Table />
    </div>
  );
}
