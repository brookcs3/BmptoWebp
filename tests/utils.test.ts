import { formatFileSize } from '../client/src/lib/utils';
import { describe, it, expect } from 'vitest';

describe('formatFileSize', () => {
  it('handles kilobytes', () => {
    expect(formatFileSize(2048)).toBe('2 KB');
  });

  it('handles zero', () => {
    expect(formatFileSize(0)).toBe('0 Bytes');
  });
});
