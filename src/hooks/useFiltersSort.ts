import { useMemo, useState } from "react";
import type { Character, SortOrder } from "../components/types";

export function useFiltersSort(initialData: Character[]) {
  const [searchTerm, setSearchTerm] = useState("");
  const [healthFilters, setHealthFilters] = useState<Set<Character["health"]>>(new Set());
  const [showHealthFilter, setShowHealthFilter] = useState(false);
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);

  const filteredAndSortedData = useMemo(() => {
    let result = [...initialData];
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (char) =>
          char.name.toLowerCase().includes(term) ||
          char.location.toLowerCase().includes(term)
      );
    }
    if (healthFilters.size > 0) {
      result = result.filter((char) => healthFilters.has(char.health));
    }
    if (sortOrder) {
      result.sort((a, b) => (sortOrder === "asc" ? a.power - b.power : b.power - a.power));
    }
    return result;
  }, [initialData, searchTerm, healthFilters, sortOrder]);

  const toggleHealthFilter = (health: Character["health"]) => {
    setHealthFilters((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(health)) newSet.delete(health);
      else newSet.add(health);
      return newSet;
    });
  };

  const toggleSort = () => {
    setSortOrder((current) => {
      if (current === null) return "asc";
      if (current === "asc") return "desc";
      return null;
    });
  };

  const toggleShowHealthFilter = () => setShowHealthFilter((s) => !s);

  return {
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
  } as const;
}

export default useFiltersSort;
