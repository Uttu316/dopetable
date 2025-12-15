import React from "react";
import { ChevronUp, ChevronDown, Filter } from "lucide-react";
import { useTableContext } from "./TableContext";

const TableHead: React.FC = () => {
  const {
    allSelected,
    someSelected,
    handleSelectAll,
    sortOrder,
    toggleSort,
    healthFilters,
    showHealthFilter,
    toggleShowHealthFilter,
    toggleHealthFilter,
  } = useTableContext();
  return (
    <thead className="glass-thead sticky top-0 z-10">
      <tr>
        <th className="px-6 py-3 text-left w-12 glass-thead">
          <input
            type="checkbox"
            checked={allSelected}
            ref={(input) => {
              if (input) input.indeterminate = someSelected && !allSelected;
            }}
            onChange={(e) => handleSelectAll(e.target.checked)}
            className="w-4 h-4 rounded border-white/30 text-cyan-300 focus:ring-cyan-300 cursor-pointer"
            aria-label="Select all characters"
          />
        </th>
        <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider glass-thead">
          Name
        </th>
        <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider glass-thead">
          Location
        </th>
        <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider glass-thead">
          <div className="flex items-center gap-2">
            Health
            <div className="relative">
              <button
                onClick={toggleShowHealthFilter}
                className="p-1.5 hover:bg-white/15 rounded-md transition-all duration-200 hover:scale-105"
                aria-label="Filter by health status"
                aria-expanded={showHealthFilter}
              >
                <Filter
                  className={`w-4 cursor-pointer h-4 transition-colors ${
                    healthFilters.size > 0 ? "text-cyan-300" : "text-white/80"
                  }`}
                />
              </button>
              {showHealthFilter && (
                <div className="glass-filter-dropdown absolute top-full left-0 mt-2 p-4 z-20 min-w-48">
                  {(["Healthy", "Injured", "Critical"] as const).map(
                    (health) => (
                      <label
                        key={health}
                        className="flex items-center gap-3 py-2 cursor-pointer hover:bg-white/10 px-3 rounded-md transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={healthFilters.has(health)}
                          onChange={() => toggleHealthFilter(health)}
                          className="w-4 h-4 rounded border-white/40 text-cyan-300 focus:ring-cyan-300 cursor-pointer"
                        />
                        <span className="text-sm text-white font-medium">
                          {health}
                        </span>
                      </label>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </th>
        <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider glass-thead">
          <button
            onClick={toggleSort}
            className="flex items-center gap-2 hover:text-cyan-200 transition-all duration-200 hover:scale-105"
            aria-label={`Sort by power ${
              sortOrder === "asc" ? "descending" : "ascending"
            }`}
          >
            Power
            {sortOrder === "asc" && (
              <ChevronUp className="w-4 h-4 text-cyan-300" />
            )}
            {sortOrder === "desc" && (
              <ChevronDown className="w-4 h-4 text-cyan-300" />
            )}
            {sortOrder === null && (
              <ChevronDown className="w-4 h-4 opacity-40 text-white/60" />
            )}
          </button>
        </th>
        <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider glass-thead">
          Status
        </th>
      </tr>
    </thead>
  );
};

export default React.memo(TableHead);
