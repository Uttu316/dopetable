import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import useSelection from '../hooks/useSelection';

const SampleComponent: React.FC<{ data: any[] }> = ({ data }) => {
  const { selectedIds, viewedIds, handleSelectAll, handleSelectRow, handleMarkViewed, allSelected, someSelected } = useSelection(data);
  return (
    <div>
      <div data-testid="selected-count">{selectedIds.size}</div>
      <div data-testid="viewed-count">{viewedIds.size}</div>
      <div data-testid="all-selected">{String(allSelected)}</div>
      <div data-testid="some-selected">{String(someSelected)}</div>
      <button onClick={() => handleSelectAll(true)}>select-all</button>
      <button onClick={() => handleSelectRow(data[0].id, true)}>select-first</button>
      <button onClick={() => handleMarkViewed(true)}>mark-viewed</button>
    </div>
  );
};

describe('useSelection hook', () => {
  const data = [
    { id: 'a', name: 'A' },
    { id: 'b', name: 'B' },
  ];

  it('selects and marks viewed', () => {
    render(<SampleComponent data={data as any} />);

    const selectedCount = screen.getByTestId('selected-count');
    const viewedCount = screen.getByTestId('viewed-count');
    const allSelected = screen.getByTestId('all-selected');
    const someSelected = screen.getByTestId('some-selected');

    expect(selectedCount.textContent).toBe('0');
    expect(viewedCount.textContent).toBe('0');
    expect(allSelected.textContent).toBe('false');

    fireEvent.click(screen.getByText('select-first'));
    expect(selectedCount.textContent).toBe('1');
    expect(someSelected.textContent).toBe('true');

    fireEvent.click(screen.getByText('mark-viewed'));
    expect(viewedCount.textContent).toBe('1');

    fireEvent.click(screen.getByText('select-all'));
    expect(selectedCount.textContent).toBe('2');
    expect(allSelected.textContent).toBe('true');
  });
});
