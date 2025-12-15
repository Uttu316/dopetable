import React from "react";
import TableRow from "../components/TableRow";
import { generateMockData } from "../utils";

export default {
  title: "Components/TableRow",
  component: TableRow,
};

const [sample] = generateMockData();

export const Unselected = () => (
  <table>
    <tbody>
      <TableRow
        character={sample}
        isSelected={false}
        isViewed={false}
        onSelect={() => {}}
      />
    </tbody>
  </table>
);

export const SelectedViewed = () => (
  <table>
    <tbody>
      <TableRow
        character={sample}
        isSelected={true}
        isViewed={true}
        onSelect={() => {}}
      />
    </tbody>
  </table>
);
