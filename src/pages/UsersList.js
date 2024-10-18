import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditUserForm from './EditUserForm';
import UserRow from './UserRow';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const fetchUsers = async (page) => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
      alert('User deleted successfully!');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsEditMode(true);
  };

  const handleFormSubmit = async (updatedUser) => {
    try {
      const response = await axios.put(`https://reqres.in/api/users/${selectedUser.id}`, updatedUser);
      setIsEditMode(false);
      setSelectedUser(null);

      setUsers(users.map(user => (user.id === selectedUser.id ? { ...user, ...updatedUser } : user)));
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="user-list px-4 sm:px-6 md:px-8">
      {!isEditMode ? (
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">User List</h2>
          
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {users.map(user => (
              <UserRow
                key={user.id}
                user={user}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="pagination mt-6 flex justify-center items-center space-x-4">
            <button
              onClick={() => handlePageChange(page - 1)}
              className="bg-gray-500 text-white px-4 py-2 rounded-md text-sm sm:text-base"
              disabled={page === 1}
            >
              Previous
            </button>
            <span className="text-sm sm:text-base">Page {page} of {totalPages}</span>
            <button
              onClick={() => handlePageChange(page + 1)}
              className="bg-gray-500 text-white px-4 py-2 rounded-md text-sm sm:text-base"
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <EditUserForm user={selectedUser} onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default UserList;
