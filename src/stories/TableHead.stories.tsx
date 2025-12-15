import TableHead from "../components/TableHead";
import { TableContext } from "../components/TableContext";

export default {
  title: "Components/TableHead",
  component: TableHead,
};

const baseValue = {
  allSelected: false,
  someSelected: false,
  handleSelectAll: () => {},
  sortOrder: null,
  toggleSort: () => {},
  healthFilters: new Set(),
  showHealthFilter: false,
  toggleShowHealthFilter: () => {},
  toggleHealthFilter: () => {},
};

export const Default = () => (
  <TableContext.Provider value={{ ...baseValue } as any}>
    <table>
      <TableHead />
    </table>
  </TableContext.Provider>
);
