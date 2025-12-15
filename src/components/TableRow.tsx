import React from "react";
import { Eye, EyeOff } from "lucide-react";
import type { Character } from "./types";
import { getHealthBadgeColor } from "../utils";

interface TableRowProps {
  character: Character;
  isSelected: boolean;
  isViewed: boolean;
  onSelect: (id: string, checked: boolean) => void;
}

const TableRow: React.FC<TableRowProps> = React.memo(
  ({ character, isSelected, isViewed, onSelect }) => {
    return (
      <tr
        className={`glass-row hover:bg-white/10 transition-colors ${
          isSelected ? "bg-white/20" : ""
        }`}
        style={{ height: "65px" }}
      >
        <td className="px-6 py-4">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={(e) => onSelect(character.id, e.target.checked)}
            className="w-4 h-4 rounded border-white/30 text-cyan-300 focus:ring-cyan-300 cursor-pointer"
            aria-label={`Select ${character.name}`}
          />
        </td>
        <td className="px-6 py-4 text-sm font-medium text-white">
          {character.name}
        </td>
        <td className="px-6 py-4 text-sm text-white/80">
          {character.location}
        </td>
        <td className="px-6 py-4">
          <span
            className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getHealthBadgeColor(
              character.health
            )}`}
          >
            {character.health}
          </span>
        </td>
        <td className="px-6 py-4 text-sm text-white font-mono">
          {character.power.toLocaleString()}
        </td>
        <td className="px-6 py-4 text-sm">
          {isViewed ? (
            <span className="text-green-400 flex items-center gap-1">
              <Eye className="w-4 h-4" />
              Viewed
            </span>
          ) : (
            <span className="text-gray-400 flex items-center gap-1">
              <EyeOff className="w-4 h-4" />
              Unviewed
            </span>
          )}
        </td>
      </tr>
    );
  }
);

TableRow.displayName = "TableRow";

export default TableRow;
