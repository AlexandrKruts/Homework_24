import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { getUserById } from "../api";


const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUserById(userId).then((data) => {
      setUser(data);
      setLoading(false);
    });
  }, [userId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Link to="/users">Back to Users</Link>
      <h3>{user.firstName}</h3>
     
    </div>
   
  );
};

export default User;
