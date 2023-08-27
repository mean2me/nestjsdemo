import { useContext, useEffect, useState } from "react";
import Grid, { ColumnType } from "../Grid";
import { UserDto } from "../../../types";
import { fetchUsers } from "../../../lib/users.client";
import "./UsersGrid.scss";
import { FilterContext } from "../../../lib/contexts/FilterContext";

const UsersGrid = () => {
  const [users, setUsers] = useState<UserDto[]>([]);
  const ctx = useContext(FilterContext);

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
      formatter: (u) => (u.enabled ? "Enabled" : "Disabled"),
      classNames: (u) => (u.enabled ? "enabled" : "disabled"),
    },
  ];

  useEffect(() => {
    fetchUsers(!!ctx?.showDisabled).then((resp) => {
      setUsers(resp ? resp : []);
    });
  }, [ctx?.showDisabled]);

  return (
    <div className="users">
      <Grid data={users} columns={columns}></Grid>
    </div>
  );
};

export default UsersGrid;
