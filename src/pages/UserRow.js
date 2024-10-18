import React from 'react';

const UserRow = ({ user, onDelete, onEdit }) => {
  return (
    <div className="user-card bg-white shadow-md rounded-lg p-6 mb-6 w-full sm:w-full md:w-2/3 lg:w-1/2 flex flex-col items-center mx-auto">
      <img
        src={user.avatar}
        alt={`${user.first_name}'s avatar`}
        className="w-24 h-24 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full mb-4"
      />
      <h3 className="text-lg sm:text-md md:text-xl font-bold text-center">
        {user.first_name} {user.last_name}
      </h3>
      <p className="text-sm sm:text-xs md:text-base text-gray-600 text-center mb-4">
        {user.email}
      </p>

      <div className="actions mt-4 flex justify-center space-x-4">
        <button
          onClick={() => onEdit(user)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm md:text-base"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-sm md:text-base"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserRow;
