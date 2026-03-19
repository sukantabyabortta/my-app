import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");

  useEffect(()=>{

    fetch(`http://localhost:3001/users/${id}`)
      .then(res=>res.json())
      .then(data=>{
        setName(data.name);
        setEmail(data.email);
      });

  },[id]);

  const handleUpdate = async (e)=>{

    e.preventDefault();

    await fetch(`http://localhost:3001/users/${id}`,{

      method:"PUT",

      headers:{
        "Content-Type":"application/json"
      },

      body: JSON.stringify({name,email})

    });

    navigate("/users");

  };

  return (
      <>
            <div className="container" style={{clear: "both"}}>
                  <div className="add-user-container">

                        <h2 className="add-user-title">Edit User</h2>

                        <form className="add-user-form" onSubmit={handleUpdate}>

                        <input
                        type="text"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className="input-field"
                        />

                        <br/><br/>

                        <input
                        type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className="input-field"
                        />

                        <br/><br/>

                        <button type="submit" className="submit-button">
                        Update User
                        </button>

                        </form>

                  </div>
            </div>
      </>
    

  );
};

export default EditUser;