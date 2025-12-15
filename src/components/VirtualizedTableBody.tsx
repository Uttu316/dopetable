import React from "react";
import TableRow from "./TableRow";
import type { Character } from "./types";

interface VirtualizedTableBodyProps {
  visibleData: Character[];
  selectedIds: Set<string>;
  viewedIds: Set<string>;
  paddingTop: number;
  paddingBottom: number;
  onSelectRow: (id: string, checked: boolean) => void;
}

const VirtualizedTableBody: React.FC<VirtualizedTableBodyProps> = React.memo(
  ({
    visibleData,
    selectedIds,
    viewedIds,
    paddingTop,
    paddingBottom,
    onSelectRow,
  }) => {
    return (
      <tbody className="glass-tbody divide-y divide-white/10">
        {/* Top padding for virtual scroll */}
        {paddingTop > 0 && (
          <tr style={{ height: `${paddingTop}px` }}>
            <td colSpan={6}></td>
          </tr>
        )}

        {/* Visible rows */}
        {visibleData.map((char) => (
          <TableRow
            key={char.id}
            character={char}
            isSelected={selectedIds.has(char.id)}
            isViewed={viewedIds.has(char.id)}
            onSelect={onSelectRow}
          />
        ))}

        {/* Bottom padding for virtual scroll */}
        {paddingBottom > 0 && (
          <tr style={{ height: `${paddingBottom}px` }}>
            <td colSpan={6}></td>
          </tr>
        )}
      </tbody>
    );
  }
);

VirtualizedTableBody.displayName = "VirtualizedTableBody";

export default VirtualizedTableBody;
