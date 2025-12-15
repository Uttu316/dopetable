import React, { createContext, useContext } from "react";
import type { Character, SortOrder } from "./types";
import useTableData from "../hooks/useTableData";
import useFiltersSort from "../hooks/useFiltersSort";
import useSelection from "../hooks/useSelection";
import useVirtualScroll from "../hooks/useVirtualScroll";

interface TableContextType {
  // Data
  data: Character[];
  loading: boolean;
  filteredAndSortedData: Character[];
  visibleData: Character[];
  startIndex: number;
  endIndex: number;
  paddingTop: number;
  paddingBottom: number;

  // State
  selectedIds: Set<string>;
  searchTerm: string;
  healthFilters: Set<Character["health"]>;
  showHealthFilter: boolean;
  sortOrder: SortOrder;
  viewedIds: Set<string>;
  scrollTop: number;
  serverFailed: boolean;
  useLocalData: boolean;

  // Computed values
  allSelected: boolean;
  someSelected: boolean;

  handleScroll: (e: React.UIEvent<HTMLDivElement>) => void;
  // Handlers
  setSearchTerm: (term: string) => void;
  handleSelectAll: (checked: boolean) => void;
  handleSelectRow: (id: string, checked: boolean) => void;
  toggleHealthFilter: (health: Character["health"]) => void;
  toggleSort: () => void;
  handleMarkViewed: (viewed: boolean) => void;
  setShowHealthFilter: (show: boolean) => void;
  toggleShowHealthFilter: () => void;
  toggleUseLocalData: (force?: boolean) => void;
}

export const TableContext = createContext<TableContextType | undefined>(
  undefined
);

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTableContext must be used within a TableProvider");
  }
  return context;
};

interface TableProviderProps {
  children: React.ReactNode;
}

export const TableProvider: React.FC<TableProviderProps> = ({ children }) => {
  // Generate mock data

  const { data, loading, serverFailed, useLocalData, toggleUseLocalData } =
    useTableData();

  const {
    searchTerm,
    setSearchTerm,
    healthFilters,
    showHealthFilter,
    sortOrder,
    filteredAndSortedData,
    toggleHealthFilter,
    toggleSort,
    toggleShowHealthFilter,
    setShowHealthFilter,
  } = useFiltersSort(data);

  const {
    selectedIds,
    viewedIds,
    handleSelectAll,
    handleSelectRow,
    handleMarkViewed,
    allSelected,
    someSelected,
  } = useSelection(filteredAndSortedData);

  const {
    startIndex,
    endIndex,
    visibleData,
    paddingTop,
    paddingBottom,
    scrollTop,
    handleScroll,
  } = useVirtualScroll(filteredAndSortedData);

  // toggleShowHealthFilter provided by hook

  const value: TableContextType = {
    data,
    loading,
    serverFailed,
    useLocalData,
    filteredAndSortedData,
    visibleData,
    startIndex,
    endIndex,
    paddingTop,
    paddingBottom,
    selectedIds,
    searchTerm,
    healthFilters,
    showHealthFilter,
    sortOrder,
    viewedIds,
    scrollTop,
    allSelected,
    someSelected,
    setSearchTerm,
    handleSelectAll,
    handleSelectRow,
    toggleHealthFilter,
    toggleSort,
    handleMarkViewed,
    setShowHealthFilter,
    toggleShowHealthFilter,
    toggleUseLocalData,
    handleScroll,
  };

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};
