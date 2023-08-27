import { useState } from "react";
import "./App.scss";
import UsersGrid from "./components/grid/users/UsersGrid";
import { FilterContext } from "./lib/contexts/FilterContext";
import { FilterContextType } from "./types";
import UsersFilter from "./components/grid/users/UsersFilter";

function App() {
  const [filterCtxState, setFilterCtxState] = useState<FilterContextType>({
    showDisabled: false,
    setFilter: (filter) =>
      setFilterCtxState((state: FilterContextType) => {
        return {
          ...state,
          showDisabled: !!filter,
        };
      }),
  });

  return (
    <div className="App">
      <FilterContext.Provider value={filterCtxState}>
        <UsersFilter />
        <UsersGrid />
      </FilterContext.Provider>
    </div>
  );
}

export default App;
