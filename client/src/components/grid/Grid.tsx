import { useEffect, useState } from "react";
import "./Grid.scss";

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

  useEffect(() => {
    setItems(data);
  }, [data, columns]);

  return (
    <div className="grid">
      {items &&
        items.map((item, index) => {
          return (
            <>
              {columns?.map(({ key }, colIdx) => (
                <div key={`col-${colIdx}`}>{item[key] as string}</div>
              ))}
            </>
          );
        })}
    </div>
  );
};

export default Grid;
