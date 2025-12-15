import VirtualizedTableBody from "../components/VirtualizedTableBody";
import { generateMockData } from "../utils";

export default {
  title: "Components/VirtualizedTableBody",
  component: VirtualizedTableBody,
};

const data = generateMockData().slice(0, 20);

export const Default = () => (
  <table>
    <VirtualizedTableBody
      visibleData={data}
      selectedIds={new Set([data[0].id])}
      viewedIds={new Set([data[1].id])}
      paddingTop={0}
      paddingBottom={0}
      onSelectRow={() => {}}
    />
  </table>
);
