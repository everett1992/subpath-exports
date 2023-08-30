import { describe, it } from 'vitest'

describe('test sub-path imports', () => {
  it('relative', () => import('./sub.js'))
  it('imports', () => import('#sub'))
  it('self-reference', () => import('subpath-exports/sub'))
})
