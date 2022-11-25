import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getUsers } from "../api";

const Users = () => {
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  let handleShowMore = (userId) => () => {
     navigate(`${userId}`);
   
  };

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <td>firstName</td>
              <td>lastName</td>
              <td>email</td>
              <td>phone</td>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button type="submit" onClick={handleShowMore(user.id)}>
                    Show more
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
