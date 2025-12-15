import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { fetchCharacters } from '../services';

describe('fetchCharacters', () => {
  const sample = [{ id: '1', name: 'A', location: 'Konoha', health: 'Healthy', power: 100 }];
  let originalFetch: any;

  beforeEach(() => {
    originalFetch = globalThis.fetch;
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it('returns data when fetch succeeds', async () => {
    globalThis.fetch = vi.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve(sample) } as any)) as any;
    const data = await fetchCharacters();
    expect(data).toEqual(sample);
  });

  it('throws when server responds not ok', async () => {
    globalThis.fetch = vi.fn(() => Promise.resolve({ ok: false, status: 500 } as any)) as any;
    await expect(fetchCharacters()).rejects.toBeDefined();
  });
});
