import { UserDto } from "../types";

export const fetchUsers = async (): Promise<UserDto[] | null> => {
  const resp = await fetch("http://localhost:3030/users");
  const data = await resp.json();
  return Array.isArray(data) && data[0] ? (data[0] as UserDto[]) : null;
};
