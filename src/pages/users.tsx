import React, { useEffect } from "react";
import UserList from "../components/UserList";
import getUsers from "../hooks/get-users";

const UsersPage: React.FC = () => {
  const { execute, users } = getUsers();

  useEffect(() => {
    execute();
  }, [execute]);

  return (
    <>
      <h1>Users</h1>
      <UserList users={users} />
    </>
  );
};

export default UsersPage;
