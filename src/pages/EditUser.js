import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from './../config';

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`${BASE_URL}/api/users/${id}`);
      setUser(response.data.data);
    };
    fetchUser();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${BASE_URL}/api/users/${id}`, user);
      navigate('/users');
    } catch (err) {
      console.error(err);
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        value={user.first_name}
        onChange={(e) => setUser({ ...user, first_name: e.target.value })}
      />
      <input
        type="text"
        value={user.last_name}
        onChange={(e) => setUser({ ...user, last_name: e.target.value })}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditUser;
