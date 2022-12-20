import React, { useState } from "react";
import goRest from "../externals/axios/go-rest";
import User from "../types/user";

const useCreateUser = () => {
  const initialUser = {
    id: null,
    name: "",
    email: "",
    gender: "male",
    status: "active",
  };

  const [user, setUser] = useState<User>(initialUser);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === "error") {
      throw new Error("User not allowed!");
    }

    setUser((user) => {
      return { ...user, [e.target.name]: e.target.value };
    });
  };

  const execute = async (): Promise<void> => {
    const response = await goRest.post("/users", user);

    setUser(initialUser);
    alert("User created successfully");
  };

  return { user, onChange, execute };
};

export default useCreateUser;
