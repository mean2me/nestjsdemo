import { useEffect, useState } from "react";
import Grid, { ColumnType } from "../Grid";
import { UserDto } from "../../../types";
import { fetchUsers } from "../../../lib/users.client";
import "./UsersGrid.scss";

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
    fetchUsers().then((resp) => {
      setUsers(resp ? resp : []);
    });
  }, []);

  return (
    <div className="users">
      <Grid data={users} columns={columns}></Grid>
    </div>
  );
};

export default UsersGrid;
