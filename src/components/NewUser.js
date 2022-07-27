import "./NewUser.css";
import NewUserForm from "./NewUserForm";

function NewUser(props) {

  function setAgeError (isError) {
    props.onAgeErrorChange(isError);
  }

  function setMissingInput (isMissingInput) {
    props.onMissingInputChange(isMissingInput);
  }

  function saveUserDataHandler(enteredUserData) {
    const userData = {
      ...enteredUserData,
      key: Math.random().toString(),
    };
    props.onAddUser(userData);
  }

  return (
    <div className="new-user">
      <NewUserForm onSaveUserData={saveUserDataHandler} onAgeErrorChange={setAgeError} onMissingInputChange={setMissingInput}/>
    </div>
  );
}

export default NewUser;
