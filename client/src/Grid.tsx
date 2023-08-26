import { FC, useEffect, useState } from "react";
import { UserDto } from "./types";
import { fetchUsers } from "./lib/users.client";

export type ColumnType<T, K extends keyof T> = {
  key: K;
  header: string;
};

export type GridProps<T, K extends keyof T> = {
  data: T[];
  columns: ColumnType<T, K>[];
};

const Grid = <T, K extends keyof T>({ data, columns }: GridProps<T, K>) => {
  const [items, setItems] = useState<T[]>([]);

  return (
    <div className="grid">
      {items &&
        items.map((item) => {
          return <>{JSON.stringify(item)}</>;
        })}
    </div>
  );
};

export default Grid;
