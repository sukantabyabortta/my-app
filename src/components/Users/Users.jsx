import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {

  const [users, setUsers] = useState([]);

  // get users
  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  // delete user
  const deleteUser = async (id) => {

    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    await fetch(`http://localhost:3001/users/${id}`, {
      method: "DELETE"
    });

    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="container">
      <div className="user-container">

      <div className="user-header">
        <h2>User List</h2>
        <Link to="/add-user" className="add-btn">Add User</Link>
      </div>

      <div className="user-grid">

        {users.map((user, index) => (

          <div key={user.id} className="user-card">

            <div className="user-serial">
              #{index + 1}
            </div>

            <h3>{user.name}</h3>
            <p>{user.email}</p>

            <div className="user-actions">
              <Link to={`/edit-user/${user.id}`} className="edit-btn">
                Edit
              </Link>

              <button
                onClick={() => deleteUser(user.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>

          </div>

        ))}

      </div>

    </div>
    </div>
  );
};

export default Users;