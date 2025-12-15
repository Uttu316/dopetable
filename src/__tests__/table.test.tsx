import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import DopeTable from "../components/table";

// Mock the hooks to avoid network calls and use local data
vi.mock("../hooks/useTableData", () => ({
  __esModule: true,
  default: () => ({
    data: [
      {
        id: "1",
        name: "John Doe",
        location: "Earth",
        health: "Healthy",
        power: 1000,
      },
      {
        id: "2",
        name: "Jane Smith",
        location: "Mars",
        health: "Injured",
        power: 800,
      },
      {
        id: "3",
        name: "Bob Johnson",
        location: "Venus",
        health: "Critical",
        power: 500,
      },
    ],
    loading: false,
    serverFailed: false,
    useLocalData: true,
    toggleUseLocalData: vi.fn(),
  }),
}));

describe("DopeTable", () => {
  it("filters data based on search input", async () => {
    render(<DopeTable />);

    // Wait for the component to load (though mocked to not load)
    await waitFor(() => {
      expect(
        screen.getByPlaceholderText("Search by name or location...")
      ).toBeInTheDocument();
    });

    // Find the search input
    const searchInput = screen.getByPlaceholderText(
      "Search by name or location..."
    );

    // Initially, all rows should be visible (but since virtualized, check visible data)
    // For simplicity, assume visibleData includes filtered data

    // Type 'John' in the search input
    fireEvent.change(searchInput, { target: { value: "John" } });

    // Wait for filtering to apply
    await waitFor(() => {
      // Check that 'John Doe' is in the document
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      // Check that 'Jane Smith' is not in the document (filtered out)
      expect(screen.queryByText("Jane Smith")).not.toBeInTheDocument();
      expect(screen.queryByText("Bob Johnson")).toBeInTheDocument();
    });
  });

  it("displays all data when search is empty", async () => {
    render(<DopeTable />);

    await waitFor(() => {
      expect(
        screen.getByPlaceholderText("Search by name or location...")
      ).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText(
      "Search by name or location..."
    );

    // Ensure search is empty
    fireEvent.change(searchInput, { target: { value: "" } });

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("Jane Smith")).toBeInTheDocument();
      expect(screen.getByText("Bob Johnson")).toBeInTheDocument();
    });
  });
});
