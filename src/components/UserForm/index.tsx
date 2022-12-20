import React from "react";

const UserForm: React.FC = () => {
  return (
    <form>
      Name: <input type="text" name="name" />
      <br />
      Email: <input type="text" name="email" />
      <br />
      <button>Create</button>
    </form>
  );
};

export default UserForm;
