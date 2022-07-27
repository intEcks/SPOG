import "./UserList.css"
function UserList (props) {
    if (props.users.length === 0) {
        return <h2 className="user-list__fallback">No users found.</h2>
      }
return (
    <div className="user-list-card">
        {props.users.map((user) => (
            <div className="user-list">
        <label>{user.username} ({user.age} years old)</label>
        </div>
      ))}
    </div>
)
}

export default UserList;