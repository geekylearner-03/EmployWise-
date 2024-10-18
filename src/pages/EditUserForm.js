import React, { useState, useEffect } from "react";

const EditUserForm = ({ user, onSubmit }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: ""
  });

  useEffect(() => {
    if (user) {
      setFormData({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-user-form p-4 bg-gray-100">
      <div className="mb-4">
        <label htmlFor="first_name" className="block">First Name:</label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="last_name" className="block">Last Name:</label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </div>
      <button type="submit" className="bg-green-500 text-white py-2 px-4">
        Update User
      </button>
    </form>
  );
};

export default EditUserForm;
