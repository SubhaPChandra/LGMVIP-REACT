import React from 'react';

function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserCard;
