import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "../../components/Users/Users";
import Loader from "../../components/Loader/Loader";
import "./home.css";
const Home = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://602e7c2c4410730017c50b9d.mockapi.io/users"
        );
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError("No data to show");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="mainContainer">
      <div className="heading">Users</div>
      {loading && <Loader />}
      {error && <h1>Error: {error}</h1>}
      {!loading && !error && (
        <>
          <div className="userList">
            <Users
              users={users}
              selectedUser={selectedUser}
              onSelect={handleUserSelect}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
