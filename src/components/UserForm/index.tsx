import React from "react";
import useCreateUser from "../../hooks/create-user";

const UserForm: React.FC = () => {
  const { onChange, user, execute } = useCreateUser();

  return (
    <form>
      Name:{" "}
      <input type="text" name="name" value={user?.name} onChange={onChange} />
      <br />
      Email:{" "}
      <input type="text" name="email" value={user?.email} onChange={onChange} />
      <br />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          execute();
        }}
      >
        Create
      </button>
    </form>
  );
};

export default UserForm;
