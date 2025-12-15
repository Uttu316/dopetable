import React from "react";
import { Search, Eye, EyeOff } from "lucide-react";
import { useTableContext } from "./TableContext";

const TableHeader: React.FC = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedIds,
    startIndex,
    endIndex,
    filteredAndSortedData,
    data,
    handleMarkViewed,
    serverFailed,
    useLocalData,
    toggleUseLocalData,
  } = useTableContext();

  const selectedCount = selectedIds.size;
  const showingRange = `${startIndex + 1}-${Math.min(
    endIndex,
    filteredAndSortedData.length
  )}`;
  const totalCount = data.length;
  const filteredCount = filteredAndSortedData.length;
  const hasMoreItems = filteredAndSortedData.length > 10; // Assuming ITEMS_PER_PAGE is 10
  const title = "Dope Character Database";
  return (
    <div className="glass-header p-6">
      <h1 className="text-3xl font-bold text-white mb-4 tracking-wide">
        {title}
      </h1>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 items-center">
        {/* Search */}
        <div className="flex-1 min-w-64 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
          <input
            type="text"
            placeholder="Search by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="glass-input w-full pl-10 pr-4 py-2"
            aria-label="Search characters"
          />
        </div>

        {/* Action Buttons */}
        {serverFailed && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleUseLocalData(!useLocalData)}
              className="glass-button px-3 py-2"
              aria-pressed={useLocalData}
            >
              {useLocalData ? "Using Local Data" : "Use Local Data"}
            </button>
            <button
              onClick={() => toggleUseLocalData(false)}
              className="glass-button px-3 py-2"
            >
              Retry Server
            </button>
          </div>
        )}
        <button
          onClick={() => handleMarkViewed(true)}
          disabled={selectedCount === 0}
          className="glass-button flex items-center gap-2 px-4 py-2"
          aria-label="Mark selected as viewed"
        >
          <Eye className="w-4 h-4" />
          Mark Viewed
        </button>
        <button
          onClick={() => handleMarkViewed(false)}
          disabled={selectedCount === 0}
          className="glass-button flex items-center gap-2 px-4 py-2"
          aria-label="Mark selected as unviewed"
        >
          <EyeOff className="w-4 h-4" />
          Mark Unviewed
        </button>
      </div>

      {serverFailed && !useLocalData && (
        <div className="mt-4 mb-8 p-3 rounded bg-red-700 text-white flex items-center justify-between">
          <div>
            Unable to fetch data from server. You can use local data instead.
          </div>
        </div>
      )}

      {/* Status */}
      <div className="mt-4 flex items-center justify-between text-sm text-white/80">
        <div>
          Showing {showingRange} of {filteredCount} characters
          {totalCount !== filteredCount && ` (filtered from ${totalCount})`}
          {selectedCount > 0 && ` • ${selectedCount} selected`}
        </div>
        {hasMoreItems && (
          <div className="text-white/70">Scroll to view more</div>
        )}
      </div>
    </div>
  );
};

export default React.memo(TableHeader);
