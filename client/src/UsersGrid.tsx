import { useEffect, useState } from "react";
import Grid, { ColumnType } from "./Grid";
import { UserDto } from "./types";
import { fetchUsers } from "./lib/users.client";

const UsersGrid = () => {
  const [users, setUsers] = useState<UserDto[]>([]);

  const columns: ColumnType<UserDto, keyof UserDto>[] = [
    {
      key: "name",
      header: "Name",
    },
    {
      key: "surname",
      header: "Surname",
    },
    {
      key: "email",
      header: "e-mail",
    },
    {
      key: "enabled",
      header: "Active",
    },
  ];

  useEffect(() => {
    fetchUsers().then((resp) => setUsers(resp));
  }, []);

  return <Grid data={users} columns={columns}></Grid>;
};

export default UsersGrid;
