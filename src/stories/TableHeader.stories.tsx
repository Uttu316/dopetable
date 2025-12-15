import TableHeader from "../components/TableHeader";
import { TableContext } from "../components/TableContext";
import { generateMockData } from "../utils";

export default {
  title: "Components/TableHeader",
  component: TableHeader,
};

const data = generateMockData().slice(0, 30);

const baseValue = {
  searchTerm: "",
  setSearchTerm: (_: string) => {},
  selectedIds: new Set<string>(),
  startIndex: 0,
  endIndex: 10,
  filteredAndSortedData: data,
  data,
  handleMarkViewed: (_: boolean) => {},
  serverFailed: true,
  useLocalData: false,
  toggleUseLocalData: (_?: boolean) => {},
};

export const Default = () => (
  <TableContext.Provider value={{ ...baseValue } as any}>
    <div style={{ padding: 16 }}>
      <TableHeader />
    </div>
  </TableContext.Provider>
);
