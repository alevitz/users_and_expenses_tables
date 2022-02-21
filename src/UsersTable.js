import "./styles.css";
import { useState } from "react";

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
    this.expenses = [];
    this.totalExpenses =
      this.foodExpense + this.suppliesExpense + this.travelExpense;
    this.foodExpense = foodExpense;
    this.travelExpense = travelExpense;
    this.suppliesExpense = suppliesExpense;
  }
}

export default function UsersTable({ name, setUsers }) {
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_name: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo((u) => ({ ...u, [name]: value }));
  };

  const handleSubmit = () => {
    setUsers((users) => [
      ...users,
      new User(userInfo.first_name, userInfo.last_name)
    ]);
    setUserInfo({
      first_name: "",
      last_name: ""
    });
  };

  return (
    <div className="Table">
      <h1>{name}</h1>
      <div className="user-container">
        <label>
          First Name
          <input
            name="first_name"
            value={userInfo.first_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name
          <input
            name="last_name"
            value={userInfo.last_name}
            onChange={handleChange}
          />
        </label>
        <button type="submit" onSubmit={handleSubmit}>
          Add User
        </button>
        <table id="users-table"></table>
      </div>
    </div>
  );
}
