import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../../lib/contexts/FilterContext";
import "./UsersFilter.scss";

const UsersFilter = () => {
  const [checked, setChecked] = useState(false);
  const ctx = useContext(FilterContext);

  useEffect(() => {
    if (ctx) {
      ctx.setFilter(checked);
    }
  }, [checked]);

  return (
    <div className="users-filter">
      <label>
        {checked ? "Show enabled" : "Show disabled"}
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.currentTarget.checked)}
        />
      </label>
    </div>
  );
};

export default UsersFilter;
