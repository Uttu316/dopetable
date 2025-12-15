import { useCallback, useMemo, useState } from "react";
import type { Character } from "../components/types";

export function useSelection(filteredData: Character[]) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [viewedIds, setViewedIds] = useState<Set<string>>(new Set());

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      if (checked) setSelectedIds(new Set(filteredData.map((c) => c.id)));
      else setSelectedIds(new Set());
    },
    [filteredData]
  );

  const handleSelectRow = useCallback((id: string, checked: boolean) => {
    setSelectedIds((prev) => {
      const newSet = new Set(prev);
      if (checked) newSet.add(id);
      else newSet.delete(id);
      return newSet;
    });
  }, []);

  const handleMarkViewed = (viewed: boolean) => {
    const selectedArray = Array.from(selectedIds);
    setViewedIds((prev) => {
      const newSet = new Set(prev);
      selectedArray.forEach((id) => {
        if (viewed) newSet.add(id);
        else newSet.delete(id);
      });
      return newSet;
    });
  };

  const { allSelected, someSelected } = useMemo(() => {
    return {
      allSelected:
        filteredData.length > 0 &&
        filteredData.every((char) => selectedIds.has(char.id)),
      someSelected: filteredData.some((char) => selectedIds.has(char.id)),
    };
  }, [filteredData, selectedIds]);

  return {
    selectedIds,
    viewedIds,
    handleSelectAll,
    handleSelectRow,
    handleMarkViewed,
    allSelected,
    someSelected,
  } as const;
}

export default useSelection;
