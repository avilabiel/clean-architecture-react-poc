import React, { useEffect } from "react";
import ListUsers from "../components/ListUsers";
import getUsers from "../hooks/get-users";

const UsersPage: React.FC = () => {
  const { execute, users } = getUsers();

  useEffect(() => {
    execute();
  }, [execute]);

  return (
    <>
      <h1>Users</h1>
      <ListUsers users={users} />
    </>
  );
};

export default UsersPage;
