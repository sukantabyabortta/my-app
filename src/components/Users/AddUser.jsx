import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, email };

    await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    navigate("/users");
  };

  return (
    <>
      <div className="container" style={{clear: "both"}}>
            <div className="add-user-container">
                  <h2 className="add-user-title">Add User</h2>

                  <form className="add-user-form" onSubmit={handleSubmit}>
                  <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                  />

                  <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  />

                  <button type="submit" className="submit-button">
                  Save User
                  </button>
                  </form>
            </div>
      </div>
    </>
  );
};

export default AddUser;