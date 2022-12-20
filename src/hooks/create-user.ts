import React, { useState } from "react";
import User from "../types/user";

const useCreateUser = () => {
  const [user, setUser] = useState<User>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const userUpdated = user[e.target.name];

    console.log({ userUpdated, e });

    setUser(userUpdated);
  };

  return { user, onChange };
};

export default useCreateUser;
