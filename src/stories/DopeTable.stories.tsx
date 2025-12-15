import React from "react";
import { TableContext } from "../components/TableContext";
import { generateMockData } from "../utils";
import TableHeader from "../components/TableHeader";
import TableHead from "../components/TableHead";
import VirtualizedTableBody from "../components/VirtualizedTableBody";

export default {
  title: "Components/DopeTable",
  component: () => null,
};

const data = generateMockData().slice(0, 40);

const providerValue = {
  data,
  loading: false,
  filteredAndSortedData: data,
  visibleData: data.slice(0, 10),
  startIndex: 0,
  endIndex: 10,
  paddingTop: 0,
  paddingBottom: 0,
  selectedIds: new Set<string>(),
  searchTerm: "",
  healthFilters: new Set<string>(),
  showHealthFilter: false,
  sortOrder: null,
  viewedIds: new Set<string>(),
  scrollTop: 0,
  serverFailed: false,
  useLocalData: false,
  allSelected: false,
  someSelected: false,
  handleScroll: () => {},
  setSearchTerm: (t: string) => {},
  handleSelectAll: (c: boolean) => {},
  handleSelectRow: (id: string, c: boolean) => {},
  toggleHealthFilter: (h: any) => {},
  toggleSort: () => {},
  handleMarkViewed: (v: boolean) => {},
  setShowHealthFilter: (s: boolean) => {},
  getHealthBadgeColor: (h: any) => "",
  toggleShowHealthFilter: () => {},
  toggleUseLocalData: (f?: boolean) => {},
};

export const Default = () => (
  <TableContext.Provider value={providerValue as any}>
    <div style={{ padding: 12, background: "#0f172a" }}>
      <div className="glass-container" style={{ padding: 12 }}>
        <TableHeader />
        <div style={{ maxHeight: 400, overflow: "auto" }}>
          <table className="glass-table" style={{ width: "100%" }}>
            <TableHead />
            <VirtualizedTableBody
              visibleData={data}
              selectedIds={providerValue.selectedIds}
              viewedIds={providerValue.viewedIds}
              paddingTop={0}
              paddingBottom={0}
              onSelectRow={() => {}}
            />
          </table>
        </div>
      </div>
    </div>
  </TableContext.Provider>
);
