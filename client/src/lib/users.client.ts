import { UserDto } from "../types";

export const fetchUsers = async (): Promise<UserDto[]> => {
  const resp = await fetch("http://localhost:3030/users");
  const data = await resp.json();
  return data as UserDto[];
};
