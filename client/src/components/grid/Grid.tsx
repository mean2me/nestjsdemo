import { useEffect, useState } from "react";
import "./Grid.scss";

export type ColumnType<T, K extends keyof T> = {
  key: K;
  header: string;
  formatter?: (value: T) => string;
  classNames?: (value: T) => string;
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
            <div style={{ display: "contents" }} key={`grid-item-${index}`}>
              {columns?.map(({ key, formatter, classNames }, colIdx) => (
                <div
                  key={`col-${colIdx}`}
                  className={`row-field ${classNames ? classNames(item) : ""}`}
                >
                  {formatter
                    ? (formatter(item) as string)
                    : (item[key] as string)}
                </div>
              ))}
            </div>
          );
        })}
    </div>
  );
};

export default Grid;
