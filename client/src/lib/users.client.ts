import { UserDto } from "../types";

export const fetchUsers = async (
  showDisabled: boolean,
): Promise<UserDto[] | null> => {
  const resp = await fetch(
    `http://localhost:3030/users/enabled?enabled=${
      showDisabled ? "true" : "false"
    }`,
  );
  const data = await resp.json();
  return Array.isArray(data) ? (data as UserDto[]) : null;
};
