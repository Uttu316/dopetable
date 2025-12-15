import { useCallback, useMemo, useRef, useState, useEffect } from "react";
import type { Character } from "../components/types";
import { ITEMS_PER_PAGE, ROW_HEIGHT } from "../components/types";

export function useVirtualScroll(filteredData: Character[]) {
  const [scrollTop, setScrollTop] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const throttleRef = useRef(false);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    if (throttleRef.current) return;
    throttleRef.current = true;
    const target = e.currentTarget as HTMLDivElement;
    setScrollTop(target.scrollTop);
    setTimeout(() => {
      throttleRef.current = false;
      setScrollTop(target.scrollTop);
    }, 16);
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
      setScrollTop(0);
    }
  }, [filteredData]);

  const { startIndex, endIndex, visibleData, paddingTop, paddingBottom } =
    useMemo(() => {
      const itemCount = filteredData.length;
      const startIndex = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - 2);
      const endIndex = Math.min(
        itemCount,
        Math.ceil((scrollTop + ITEMS_PER_PAGE * ROW_HEIGHT) / ROW_HEIGHT) + 2
      );
      const visibleData = filteredData.slice(startIndex, endIndex);
      const paddingTop = startIndex * ROW_HEIGHT;
      const paddingBottom = (itemCount - endIndex) * ROW_HEIGHT;
      return { startIndex, endIndex, visibleData, paddingTop, paddingBottom };
    }, [filteredData, scrollTop]);

  return {
    startIndex,
    endIndex,
    visibleData,
    paddingTop,
    paddingBottom,
    scrollTop,
    handleScroll,
    scrollContainerRef,
  } as const;
}

export default useVirtualScroll;
