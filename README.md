# DopeTable - Character Database

## ProductIon URL: [Visit DopeTable](https://dainty-parfait-132faf.netlify.app/)

A modern, performant React application for browsing a database of characters with advanced filtering, searching, and virtualized scrolling capabilities.

## Features

- **Virtualized Scrolling**: Efficiently handles large datasets with smooth scrolling performance
- **Real-time Search**: Search characters by name or location
- **Health Filtering**: Filter characters by health status (Healthy, Injured, Critical)
- **Sorting**: Sort characters by name or power level
- **Selection Management**: Select individual rows or all rows with bulk actions
- **Responsive Design**: Beautiful glass-morphism UI with Tailwind CSS
- **Mock Data Server**: JSON Server for simulating API responses
- **Comprehensive Testing**: Unit tests with Vitest and React Testing Library
- **Component Documentation**: Storybook for component development and testing

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS with custom glass-morphism effects
- **Testing**: Vitest, React Testing Library, @testing-library/jest-dom
- **Component Library**: Storybook
- **Mock Server**: JSON Server
- **Icons**: Lucide React
- **Build Tool**: Vite with SWC for fast development

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd dopetable
```

2. Install dependencies:

```bash
npm install
```

3. Generate mock data (optional, if not already present):

```bash
npm run generate-data
```

### Running the Application

1. Start the mock JSON server:

```bash
npm run server
```

2. In a new terminal, start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Running Tests

Run the test suite with Vitest:

```bash
npm test
```

### Running Storybook

View and develop components in isolation:

```bash
npm run storybook
```

Storybook will be available at `http://localhost:6006`.

## Project Structure

```
src/
├── components/          # React components
│   ├── table.tsx       # Main table component
│   ├── TableHeader.tsx # Header with search and controls
│   ├── TableHead.tsx   # Table column headers
│   ├── TableRow.tsx    # Individual table rows
│   ├── VirtualizedTableBody.tsx # Virtualized table body
│   ├── TableContext.tsx # Context for table state management
│   ├── LoadingSpinner.tsx # Loading component
│   └── types.ts        # TypeScript type definitions
├── hooks/              # Custom React hooks
│   ├── useTableData.ts # Data fetching hook
│   ├── useFiltersSort.ts # Filtering and sorting logic
│   ├── useSelection.ts # Row selection management
│   └── useVirtualScroll.ts # Virtual scrolling logic
├── services/           # API services
├── utils.ts            # Utility functions
├── __tests__/          # Test files
│   ├── table.test.tsx  # Table component tests
│   ├── utils.test.ts   # Utility function tests
│   └── useSelection.test.tsx # Selection hook tests
└── stories/            # Storybook stories
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests with Vitest
- `npm run lint` - Run ESLint
- `npm run server` - Start JSON server for mock data
- `npm run generate-data` - Generate mock character data
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

## Testing

The project includes comprehensive tests for:

- Utility functions (data generation, health badge colors)
- Table component search functionality
- Selection management hooks
- Component rendering and interactions

Tests simulate user interactions like typing in search fields and verify correct data filtering and display.

### Table Component Testing Checklist

- [x] Set up test environment with Vitest and React Testing Library
- [x] Mock the `useTableData` hook to provide test data
- [x] Create test for filtering data based on search input
- [x] Simulate user typing in the search input field
- [x] Verify that filtered data is displayed correctly in the table
- [x] Test that all data is shown when search input is empty
- [x] Ensure tests handle virtualized table rendering
- [x] Confirm tests pass and provide adequate coverage

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License

This project is licensed under the MIT License.

## Author

**Utkarsh Gupta**
