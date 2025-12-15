import React from "react";
import { TableProvider, useTableContext } from "./TableContext";
import TableHeader from "./TableHeader";
import TableHead from "./TableHead";
import VirtualizedTableBody from "./VirtualizedTableBody";
import LoadingSpinner from "./LoadingSpinner";
import { ITEMS_PER_PAGE, ROW_HEIGHT } from "./types";

const TableContent: React.FC = () => {
  const {
    loading,
    visibleData,
    paddingTop,
    paddingBottom,
    selectedIds,
    viewedIds,
    filteredAndSortedData,
    handleSelectRow,
    handleScroll,
  } = useTableContext();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 flex items-center justify-center">
      <div className="w-full max-w-7xl">
        <div className="glass-container">
          <TableHeader />

          {/* Table Container */}
          <div
            onScroll={handleScroll}
            className="glass-scrollbar overflow-y-auto overflow-x-auto relative"
            style={{
              height: `${Math.min(
                ITEMS_PER_PAGE * ROW_HEIGHT + 60,
                filteredAndSortedData.length * ROW_HEIGHT + 60
              )}px`,
              maxHeight: "70vh",
            }}
          >
            <div>
              <table
                className="glass-table w-full border-collapse"
                role="table"
              >
                <TableHead />

                <VirtualizedTableBody
                  visibleData={visibleData}
                  selectedIds={selectedIds}
                  viewedIds={viewedIds}
                  paddingTop={paddingTop}
                  paddingBottom={paddingBottom}
                  onSelectRow={handleSelectRow}
                />
              </table>
            </div>
          </div>

          {filteredAndSortedData.length === 0 && (
            <div className="empty-state text-center py-12 text-white/70">
              No characters found matching your criteria
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const DopeTable: React.FC = () => {
  return (
    <TableProvider>
      <TableContent />
    </TableProvider>
  );
};

export default DopeTable;
