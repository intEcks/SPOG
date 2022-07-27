import React from "react";
import NewUser from "./components/NewUser";
import UserList from "./components/UserList";
import { useState } from "react";
import ErrorModal from "./components/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);
  const [isAgeError, setIsAgeError] = useState(false);
  const [isMissingInput, setIsMissingInput] = useState(false);

  function addUserHandler(user) {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  }

  function setAgeError(isError) {
    isError ? setIsAgeError(true) : setIsAgeError(false);
  }

  function setMissingInput(isError) {
    isError ? setIsMissingInput(true) : setIsMissingInput(false);
  }

  function modalExit() {
    setIsAgeError(false);
    setIsMissingInput(false);
  }

  if (isMissingInput) {
    return (
      <div>
      <div style={{ opacity: ".5" }}>
        <NewUser onAddUser={addUserHandler} />
        <UserList users={users} />
        </div><div>
        <ErrorModal errorType={"missingInput"} onModalExit={modalExit}/>
      </div>
      </div>
    );
  } else if (isAgeError) {
    return (
      <div>
      <div style={{ opacity: ".5" }}>
        <NewUser onAddUser={addUserHandler} />
        <UserList users={users} />
        </div>
        <div>
        <ErrorModal errorType={"ageError"} onModalExit={modalExit}/>
      </div>
      </div>
    );
  } else {
    return (
      <div>
        <NewUser onAddUser={addUserHandler} onAgeErrorChange={setAgeError} onMissingInputChange={setMissingInput}/>
        <UserList users={users} />
      </div>
    );
  }
}

export default App;
