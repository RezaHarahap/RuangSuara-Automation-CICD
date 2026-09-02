import { describe, expect, it } from 'vitest';

describe('CI failure evidence', () => {
  it('fails intentionally so GitHub Actions records a real failing check', () => {
    expect(1).toBe(2);
  });
});
