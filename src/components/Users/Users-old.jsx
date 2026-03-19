import axios from "axios";
import { useState, useEffect } from "react";
import Breadcrumbs from "../Breadcrumbs";

const Users = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("../../../users.json")
  //     .then((response) => response.json())
  //     .then((userData) => {
  //       setUsers(userData);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
  const fetchUsers = async () => {  // Create an async function to fetch users.
    try {
      const response = await axios.get("/users.json");  // Call API and wait for server response.
      setUsers(response.data);   // Axios already parsed JSON
    } catch (err) {  // If API fails:
      setError(err);
    } finally {
      setLoading(false);  // finally runs always.
    }
  };

  fetchUsers();
}, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <p>Error loading users...</p>;
  }

  return (
    <>
      <Breadcrumbs
        pageTitle="User"
        items={[
          { label: "Home", link: "/" }
        ]}
      />

      <div className="container users-container">
        <h2 className="title">User List</h2>

        <div className="users-grid">
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <h3 className="user-name">{user.name}</h3>

              <p className="user-email">{user.email}</p>

              <div className="address">
                <p>{user.address.street}</p>
                <p>{user.address.suite}</p>
                <p>{user.address.city}</p>
                <p>{user.address.zipcode}</p>
              </div>

              <div className="geo">
                <span>Lng: {user.address.geo.lng}</span>
                <span>Lat: {user.address.geo.lat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;