import { useState } from "react";
import "./NewUserForm.css";

function NewUserForm(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    if (
      enteredAge.trim().length === 0 ||
      enteredUsername.trim().length === 0
    ) {
      props.onMissingInputChange(true);
    } else if (enteredAge > 0) {
      const userData = {
        username: enteredUsername,
        age: +enteredAge,
      };

      props.onSaveUserData(userData);
    } else {
      props.onAgeErrorChange(true);
    }
    setEnteredUsername("");
    setEnteredAge("");
  }

  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }

  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-user__controls">
        <div className="new-user__control">
          <label>Username</label>
          <input
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
        </div>
        <div className="new-user__control">
          <label>Age</label>
          <input type="number" value={enteredAge} onChange={ageChangeHandler} />
        </div>
      </div>
      <div className="new-user__actions">
        <button type="submit">Add User</button>
      </div>
    </form>
  );
}

export default NewUserForm;
