import React from "react";

const UserForm = ({ getUser }) => {
  return (
    <form onSubmit={getUser}>
      <input
        style={{ margin: "20px auto", display: "block" }}
        type="text"
        name="username"
      />
      <button>Search User</button>
    </form>
  );
};

export default UserForm;
