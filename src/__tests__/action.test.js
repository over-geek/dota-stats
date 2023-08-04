import { searchHeroes } from '../redux/hero_stats';

describe('searchHeroes', () => {
  it('creates an action that returns a filtered array or the previous State', () => {
    expect(searchHeroes('Axe').payload).toBe('Axe');
  });
});
